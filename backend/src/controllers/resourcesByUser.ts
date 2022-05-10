import { Request, Response } from "express";

import Resources from "../models/resource";

const resourceByUser = async (req: Request, res: Response) => {
  const user = req.body.user;

  if (!user) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  try {
    Resources.find({ user: user })
      .select("noteId title content")
      .exec()
      .then((doc) => {
        if (doc.length == 0) {
          res.status(404).json({
            message: "The user didn't create any resources",
          });
        } else {
          res.status(200).json({
            message: "Successfully grabbed user's resources!",
            resources: doc,
          });
        }
      });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

export default resourceByUser;
