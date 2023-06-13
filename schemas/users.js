const Joi = require("joi");

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string().allow("starter", "pro", "business"),
});

const verifySchema = Joi.object({
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
});

module.exports = {
  registerSchema,
  loginSchema,
  verifySchema,
};
