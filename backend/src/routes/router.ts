import express from "express";

import createResourceViaNft from "../controllers/create/nft";
import createResourceViaToken from "../controllers/create/token";
import verifyNftAuthority from "../controllers/verify/nft";
import verifyTokenAuthority from "../controllers/verify/token";
import getTokenResourceInfo from "../controllers/info/token";
import getNftResourceInfo from "../controllers/info/nft";
import resourcesByUser from "../controllers/info/resourcesByUser";

import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.post("/create/nft", verifyToken, createResourceViaNft);
router.post("/create/token", verifyToken, createResourceViaToken);
router.get("/verify/nft", verifyNftAuthority);
router.get("/verify/token", verifyTokenAuthority);
router.get("/info/nft", getNftResourceInfo);
router.get("/info/token", getTokenResourceInfo);
router.get("/info/resourcesByUser", resourcesByUser);

export default router;
