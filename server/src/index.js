const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const routes = require("./routes/");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
});
