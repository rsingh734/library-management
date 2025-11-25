import { Request, Response, NextFunction } from "express";
import admin from "firebase-admin";

export class AdminController {
    static async setCustomClaims(req: Request, res: Response, next: NextFunction) {
        try {
            const { uid, claims } = req.body;

            if (!uid || !claims) {
                return res.status(400).json({ message: "uid and claims are required" });
            }

            await admin.auth().setCustomUserClaims(uid, claims);

            return res.status(200).json({
                message: "Custom claims set successfully",
                claims
            });
        } catch (error) {
            next(error);
        }
    }
}
