const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.PORT || 3000;

const db = mongoose
  .connect(process.env.DB.replace("<password>", process.env.DB_PASSWORD))
  .then(() => {
    console.log("Successfully connected to database");
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}....`);
});
