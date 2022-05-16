import { Request, Response, NextFunction } from "express";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers["authorization"]?.split(" ")[1]) {
    next();
  } else {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

export default verifyToken;
