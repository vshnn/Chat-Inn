import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

import { updateUserProfile } from "../controllers/update UserProfile.js";


const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.put("/:id", protectRoute, updateUserProfile);

router.put("/:id", updateUserProfile);

export default router;
