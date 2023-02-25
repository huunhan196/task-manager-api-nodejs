const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) throw new Error();

    req.token = token;
    req.user = user; //Store user in the request so that the route doesn not have to get user again.

    next();
  } catch (err) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
