const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.js");
const recipesRouter = require("./routes/recipes.js");

const mongoose = require("mongoose");
//import { userRouter } from "./routes/user.js";
//import { recipesRouter } from "./routes/recipes.js";

const app = express();


app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
mongoose.connect("mongodb+srv://gmkr200:Reddy1212@cluster0.uhegrg4.mongodb.net/recipe?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
app.listen(3001, () => console.log("SERVER STARTED!"));