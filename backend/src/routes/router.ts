import express from "express";

import createResourceViaNft from "../controllers/create/nft";
import createResourceViaToken from "../controllers/create/token";
import verifyNftAuthority from "../controllers/verify/nft";
import verifyTokenAuthority from "../controllers/verify/token";

import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.post("/create/nft", verifyToken, createResourceViaNft);
router.get("/verify/nft", verifyNftAuthority);
router.post("/create/token", verifyToken, createResourceViaToken);
router.get("/verify/token", verifyTokenAuthority);

export default router;
