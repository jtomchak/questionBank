import express from "express";
var apiRouter = express.Router();
var apiController = require("../api/api.controller");

apiRouter.route("/questions").get(apiController.getByAuthor);

module.exports = apiRouter;
