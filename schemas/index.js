const { addContactSchema, updateFavoriteSchema } = require("./contacts");
const { registerSchema, loginSchema, verifySchema } = require("./users");

module.exports = {
  addContactSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
  verifySchema,
};
