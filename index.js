require("dotenv").config();
const server = require("./src/server");
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;

conn
  .sync({ force: process.env.NODE_ENV !== "production" })
  .then(() => {
    server.listen(port, "0.0.0.0", () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
    console.error("Stack trace:", error.stack);
    process.exit(1); 
  });