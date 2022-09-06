const express = require("express");
const path = require("path");
const loginRouter = express.Router();

loginRouter.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "..", "public/index.html"));
});

loginRouter.post("/", (request, response) => {
  const user = request.body;

  request.session.user = user.name;

  request.session.save((err) => {
    if (err) {
      return response.status(404).json({
        message: "An error ocurred",
      });
    }

    response.status(200).json({
      message: "Login successful",
    });
  });
});

loginRouter.get("/user", (request, response) => {
  response.status(200).json({
    message: "User found!",
    user: request.session.user,
  });
});

module.exports = loginRouter;
