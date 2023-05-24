const express = require("express");

const router = express.Router();
const ctrl = require("../../controllers/contacts");
const {
  volidateBody,
  isValidId,
  isFavoriteField,
} = require("../../middlewares/index");
const {
  addContactSchema,
  updateFavoriteSchema,
} = require("../../schemas/index");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", volidateBody(addContactSchema), ctrl.add);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  isValidId,
  volidateBody(addContactSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isFavoriteField,
  volidateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
