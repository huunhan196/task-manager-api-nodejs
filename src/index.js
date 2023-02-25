const express = require("express");
require("./db/mongoose"); //Ensure mongoose is connected to the database

//env_cmd npm packages for setting up environment

const app = express();

// app.use((req, res, next) => {
//   res
//     .status(503)
//     .send("Server is currently under maintenance. Please come back soon.");
// });

app.use(express.json());

const PORT = process.env.PORT;

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

app.use(userRouter);
app.use(taskRouter);

// const bcrypt = require("bcryptjs");

// const bcryptTest = async () => {
//   const password = "NhanLucas1001";
//   const hashedPassword = await bcrypt.hash(password, 8);
//   console.log(password);
//   console.log(hashedPassword);
//   const isMatched = await bcrypt.compare(password, hashedPassword);
//   console.log(isMatched);
// };

// bcryptTest();

// const jwt = require("jsonwebtoken");

// const jwtTest = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "thisissecret", {
//     expiresIn: "5 days",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisissecret");
//   console.log(data);
// };

// jwtTest();

// multer test
// const multer = require("multer");
// const upload = multer({
//   dest: "images",
// });
// app.post("/upload", upload.single("upload"), (req, res) => {});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
