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
    await getNfts(walletAddress).then((nfts: string[]) => {
      if (nfts.length === 0) {
        return res.status(400).json({
          message: "No NFTs found",
        });
      }

      if (nfts.includes(updateAuthority)) {
        return res.status(200).json({
          message: "Authority verified",
        });
      }
      return res.status(400).json({
        message: "Authority not verified",
      });
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

export default verifyNftAuthority;
