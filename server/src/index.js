const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const routes = require("./routes/");
const handleErrors = require("./middleware/handleErrors");
const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());
app.use(routes);
app.use(handleErrors);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server running on port ${process.env.SERVER_PORT}`);
});
