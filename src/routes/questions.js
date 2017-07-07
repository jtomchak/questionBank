var express = require("express");
var questionRouter = express.Router();
var questionsController = require("../controllers/question/question.controller");

/* GET users listing. */
questionRouter.route("/new").get(questionsController.newQuestion);
questionRouter.route("/new").post(questionsController.submitQuestion);

questionRouter.route("/").get(questionsController.questionList);

module.exports = questionRouter;
