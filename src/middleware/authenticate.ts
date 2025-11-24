// External library imports
import { Request, Response, NextFunction } from "express";
import { DecodedIdToken } from "firebase-admin/auth";

// Internal module imports
import { AuthenticationError } from "../api/v1/errors/errors";
import { getErrorMessage, getErrorCode } from "../api/v1/utilis/errorUtilis";
import { auth } from "../../src/config/firebase";

/**
 * Middleware to authenticate a user using a Firebase ID token.
 *
 * Extracts token → verifies token → attaches user to res.locals → continues.
 * Throws standardized AuthenticationError on failure.
 */
const authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const authHeader = req.headers.authorization;

        const token: string | undefined = authHeader?.startsWith("Bearer ")
            ? authHeader.split(" ")[1]
            : undefined;

        if (!token) {
            throw new AuthenticationError(
                "Unauthorized: No token provided",
                "TOKEN_NOT_FOUND"
            );
        }

        const decodedToken: DecodedIdToken = await auth.verifyIdToken(token);

        // Store user info for downstream middleware
        res.locals.uid = decodedToken.uid;
        res.locals.role = decodedToken.role;

        next();
    } catch (error: unknown) {
        if (error instanceof AuthenticationError) {
            return next(error);
        } 
        
        if (error instanceof Error) {
            return next(
                new AuthenticationError(
                    `Unauthorized: ${getErrorMessage(error)}`,
                    getErrorCode(error)
                )
            );
        }

        return next(
            new AuthenticationError(
                "Unauthorized: Invalid token",
                "TOKEN_INVALID"
            )
        );
    }
};

export default authenticate;
