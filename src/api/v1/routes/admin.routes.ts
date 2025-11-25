import { Router } from "express";
import { AdminController } from "../controllers/adminController";
import authenticate from "../../../middleware/authenticate";


const router = Router();

/**
 * Assign custom claims (roles)
 */
router.post(
    "/setCustomClaims",
    authenticate,
    AdminController.setCustomClaims
);

export default router;
