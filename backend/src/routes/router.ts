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
router.post("/verify/nft", verifyNftAuthority);
router.post("/verify/token", verifyTokenAuthority);
router.post("/info/nft", verifyToken, getNftResourceInfo);
router.post("/info/token", verifyToken, getTokenResourceInfo);
router.post("/info/resourcesByUser", verifyToken, resourcesByUser);

export default router;
