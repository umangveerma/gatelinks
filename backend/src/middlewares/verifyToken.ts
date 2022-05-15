import axios from "axios";
import { Request, Response, NextFunction } from "express";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers["authorization"]?.split(" ")[1]) {
    next();
    axios
      .get("https://gated-solana-links.us.auth0.com/userinfo", {
        headers: {
          Authorization: `Bearer ${
            req.headers["authorization"]?.split(" ")[1]
          }`,
        },
      })
      .then((response) => {
        if (response.status === 401) {
          return res.status(401).send("Unauthorized");
        } else {
          next();
        }
      })
      .catch((error) => {
        return res.status(500).send({
          message: "Internal Server Error",
          error: error,
        });
      });
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

export default verifyToken;
