const mongoost = require("mongoose");

const app = require("./app");
const DB_HOST =
  "mongodb+srv://Dmitry:QSyYUNNKd%402E9qg@cluster0.x8vtve9.mongodb.net/contacts_reader";

mongoost
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// QSyYUNNKd@2E9qg
