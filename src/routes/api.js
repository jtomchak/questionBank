var express = require("express");
var router = express.Router();
var questionAPI = require("../api/question/question.api");

router.route("/questions").get(questionAPI.questionsByAuthor);

module.exports = router;
