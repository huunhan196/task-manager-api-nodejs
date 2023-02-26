const express = require("express");
require("./db/mongoose"); //Ensure mongoose is connected to the database

//env_cmd npm packages for setting up environment

const app = express();

app.use(express.json());

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

app.use(userRouter);
app.use(taskRouter);

module.exports = app;
