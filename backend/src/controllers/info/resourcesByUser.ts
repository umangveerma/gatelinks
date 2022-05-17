import { Request, Response } from "express";

import nftResource from "../../models/nftResource";
import tokenResource from "../../models/tokenResource";

const resourcesByUser = async (req: Request, res: Response) => {
  const user = req.body.user;

  if (!user) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  try {
    const resources: any = [];

    nftResource.find({ user: user }).then((doc) => {
      if (doc.length == 0) {
        res.status(404).json({
          message: "The user didn't create any resources",
        });
      } else {
        doc.map((resource) => {
          resources.push(resource);
        });
      }
    });

    tokenResource.find({ user: user }).then((doc) => {
      doc.map((resource) => {
        resources.push(resource);
      });
      return res.status(200).json({
        message: "Successfully grabbed resources!",
        resources: resources,
      });
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

export default resourcesByUser;
