const { HttpError } = require("../helpers");

const isFavoriteField = (req, res, next) => {
  const isFavorite = req.body.favorite !== undefined;

  if (!isFavorite) {
    next(HttpError(400, "missing field favorite"));
  }
  next();
};
module.exports = {
  isFavoriteField,
};
