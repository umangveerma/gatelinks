declare module "express-access-token" {
  import { NextFunction } from "express";
  export default function expressAccessToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): void;
}
