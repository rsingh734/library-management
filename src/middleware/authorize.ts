// External library imports
import { Request, Response, NextFunction } from "express";

// Internal module imports
import { AuthorizationOptions } from "../api/v1/models/authorizationOptions";
import { MiddlewareFunction } from "../api/v1/types/expressTypes";
import { AuthorizationError } from "../api/v1/errors/errors";

/**
 * Middleware to check if a user is authorized based on their role or UID.
 * Integrated with centralized error handling system.
 *
 * @param {AuthorizationOptions} opts - The authorization options.
 * @returns {MiddlewareFunction} The middleware function.
 */
const isAuthorized = (opts: AuthorizationOptions): MiddlewareFunction => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const { role, uid } = res.locals;
            const { id } = req.params;

            // Allow user to access their own resource (e.g., /users/:id)
            if (opts.allowSameUser && id && uid === id) {
                return next();
            }

            // No role found → role not assigned → forbidden
            if (!role) {
                throw new AuthorizationError(
                    "Forbidden: No role found",
                    "ROLE_NOT_FOUND"
                );
            }

            // Check if role is in allowed list
            if (opts.hasRole.includes(role)) {
                return next();
            }

            // Not enough permission
            throw new AuthorizationError(
                "Forbidden: Insufficient role",
                "INSUFFICIENT_ROLE"
            );
        } catch (error) {
            next(error);
        }
    };
};

export default isAuthorized;
