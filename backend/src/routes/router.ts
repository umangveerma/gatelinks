import express from "express";

import resource from "../controllers/resource";
import verifyAuthority from "../controllers/verifyAuthority";
import resourcesByUser from "../controllers/resourcesByUser";

import verifyToken from "../middlewares/verifyToken";

const router = express.Router();

router.post("/resource", verifyToken, resource);
router.get("/verifyAuthority", verifyAuthority);
router.get("/resourcesByUser", resourcesByUser);

export default router;
