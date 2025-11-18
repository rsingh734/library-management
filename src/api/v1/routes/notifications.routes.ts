import { Router } from "express";
import { NotificationsController } from "../controllers/notifications.controller";

const router = Router();

router.post("/registration", NotificationsController.sendRegistration);
router.post("/reservation", NotificationsController.sendReservationNotice);
router.post("/return-reminder", NotificationsController.sendReturnReminder);


export default router;


