const app = require("./app");
const PORT = process.env.PORT;

// app.use((req, res, next) => {
//   res
//     .status(503)
//     .send("Server is currently under maintenance. Please come back soon.");
// });

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
