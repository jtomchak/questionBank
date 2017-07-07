var Question = require("./question.model");

exports.newQuestion = function(req, res) {
  res.render("newQuestion", { title: "Questions" });
};

exports.submitQuestion = function(req, res) {
  var question = new Question({
    question: req.body.question,
    answer: req.body.answer,
    author: req.body.author
  });
  question.save(function(err, small) {
    if (err) return handleError(err);
    // saved!
    res.send("Saved Dude, congratulations");
  });
};

exports.questionList = function(req, res) {
  Question.find({})
    .sort({ createdAt: "asc" })
    .limit(25)
    .exec(function(err, questions) {
      if (err) return next(err);
      res.render("questionList", {
        questions: questions
      });
    });
};
