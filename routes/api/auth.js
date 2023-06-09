const express = require("express");
const router = express.Router();
const { volidateBody, authenticate, upload } = require("../../middlewares");
const { registerSchema, loginSchema } = require("../../schemas");
const ctrl = require("../../controllers/auth");

router.post("/register", volidateBody(registerSchema), ctrl.register);
router.post("/login", volidateBody(loginSchema), ctrl.login);
router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
