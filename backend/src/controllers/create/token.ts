import { Request, Response } from "express";

import Resources from "../../models/tokenResource";

import createResourceId from "../../utils/createResourceId";

const createResourceViaToken = async (req: Request, res: Response) => {
  const user = req.body.user;
  const title = req.body.title;
  const description = req.body.description;
  const url = req.body.url;
  const mintAddress = req.body.mintAddress;
  const tokenName = req.body.tokenName;

  if (!(user || title || description || url || mintAddress || tokenName)) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  try {
    const resource = new Resources({
      user: user,
      title: title,
      description: description,
      url: url,
      mintAddress: mintAddress,
      tokenName: tokenName,
      resourceId: createResourceId(user, title, "tkn"),
    });

    await resource.save();

    return res.status(200).json({
      message: "Resource created",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

export default createResourceViaToken;
