import Joi from "joi";

export const createMemberSchema = Joi.object({
  name: Joi.string().min(3).required(),
  membershipType: Joi.string().valid("standard", "premium").required(),
  contactPreferences: Joi.string().valid("email", "sms").required(),
});

export const updateMemberSchema = Joi.object({
  name: Joi.string().min(3),
  membershipType: Joi.string().valid("standard", "premium"),
  contactPreferences: Joi.string().valid("email", "sms"),
});
