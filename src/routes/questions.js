var express = require("express");
var questionRouter = express.Router();
var questionsController = require("../controllers/question/question.controller");

/* GET users listing. */
questionRouter.route("/").get(questionsController.get);
questionRouter.route("/").post(questionsController.post);

module.exports = questionRouter;
