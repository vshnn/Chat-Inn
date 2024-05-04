import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";
import { updateUserProfile } from "../controllers/updateUserProfile.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

router.put("/:id", updateUserProfile);

export default router;
