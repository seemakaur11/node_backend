import express from "express";
import "./helper/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import {
  loginControllers,
  registerControllers,
} from "./controllers/register.js";

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;
// route
app.post("/register", registerControllers);
app.post("/login", loginControllers);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
