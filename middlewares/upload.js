const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");
const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cd) => {
    cd(null, file.originalname);
  },
  limits: {
    fileSize: 1048576,
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = {
  upload,
};
