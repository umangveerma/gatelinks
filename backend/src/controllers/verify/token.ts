import { Request, Response } from "express";

import getTokens from "../../utils/getTokens";
import verifyAddress from "../../utils/verifyAddress";

const verifyTokenAuthority = async (req: Request, res: Response) => {
  const walletAddress = req.body.walletAddress;
  const mintAddress = req.body.mintAddress;
  const amount = req.body.amount;

  if (!(walletAddress || mintAddress || amount)) {
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
    await getTokens(walletAddress).then((tokens: any) => {
      if (tokens.length === 0) {
        return res.status(400).json({
          message: "No tokens found",
        });
      }

      tokens.forEach((token: { mintAddress: string; amount: number }) => {
        console.log(token);
        if (
          token.mintAddress === mintAddress &&
          Number(token.amount) / 1e9 >= Number(amount)
        ) {
          return res.status(200).json({
            message: "Authority verified",
          });
        }
        return res.status(400).json({
          message: "Authority not verified",
        });
      });
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

export default verifyTokenAuthority;
