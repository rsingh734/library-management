import Joi from "joi";

export const createNotificationSchema = Joi.object({
  memberId: Joi.string().required(),
  type: Joi.string().valid("reminder", "return", "general").required(),
  message: Joi.string().min(5).required(),
});

export const notificationQuerySchema = Joi.object({
  memberId: Joi.string(),
  type: Joi.string().valid("reminder", "return", "general"),
  sort: Joi.string().valid("asc", "desc"),
});
