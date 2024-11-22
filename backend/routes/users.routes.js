import express from "express";
import { getUsers, signin, signup } from "../controllers/user.controller.js";
import { verifyFirebaseToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", verifyFirebaseToken, getUsers);
router.post("/signup", signup);
router.post("/signin", signin);

export default router;
