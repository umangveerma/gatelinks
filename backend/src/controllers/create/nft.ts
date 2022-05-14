import { Request, Response } from "express";

import Resources from "../../models/nftResource";

import createResourceId from "../../utils/createResourceId";

const createResourceViaNft = async (req: Request, res: Response) => {
  const user = req.body.user;
  const title = req.body.title;
  const description = req.body.description;
  const url = req.body.url;
  const updateAuthority = req.body.updateAuthority;
  const nftName = req.body.nftName;
  const nftMarketplace = req.body.nftMarketplace;

  if (
    !(
      user ||
      title ||
      description ||
      url ||
      updateAuthority ||
      nftName ||
      nftMarketplace
    )
  ) {
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
      updateAuthority: updateAuthority,
      nftName: nftName,
      nftMarketplace: nftMarketplace,
      resourceId: createResourceId(user, title, "nft"),
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

export default createResourceViaNft;
