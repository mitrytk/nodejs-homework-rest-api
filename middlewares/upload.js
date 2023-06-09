const multer = require("multer");
const path = require("path");
const { HttpError } = require("../helpers");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cd) => {
    const { originalname } = file;
    const uniquePrefix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    const fileFormat = originalname.slice(
      originalname.indexOf("."),
      originalname.lenght
    );
    const newName = `${uniquePrefix}_${fileFormat}`;
    cd(null, newName);
  },
});

const limits = {
  fileSize: 1024 ** 4,
};

const fileFilter = (req, file, cd) => {
  const { mimetype } = file;
  if (
    mimetype !== "image/jpeg" &&
    mimetype !== "image/png" &&
    mimetype !== "image/jpg"
  ) {
    cd(HttpError(400, "Invalid image format (use JPG/PNG/JPEG)"));
  }
  cd(null, true);
};

const upload = multer({
  storage: multerConfig,
  limits,
  fileFilter,
});

module.exports = {
  upload,
};
