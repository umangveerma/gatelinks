import { Request, Response } from "express";

import verifyAddress from "../../utils/verifyAddress";
import getNfts from "../../utils/getNfts";

const verifyNftAuthority = async (req: Request, res: Response) => {
  const walletAddress = req.body.walletAddress;
  const updateAuthority = req.body.updateAuthority;

  if (!(walletAddress || updateAuthority)) {
    return res.status(400).json({
      message: "Missing required fields",
    });
  }

  if (!verifyAddress(walletAddress)) {
    return res.status(400).json({
      message: "Invalid wallet address",
    });
  }

  try {
    const nfts = await getNfts(walletAddress);

    if (nfts.includes(updateAuthority)) {
      return res.status(200).json({
        message: "Authority verified",
      });
    } else {
      return res.status(400).json({
        message: "Authority not verified",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

export default verifyNftAuthority;
