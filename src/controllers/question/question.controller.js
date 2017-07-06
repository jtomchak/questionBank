var Question = require("./question.model");

exports.get = function(req, res) {
  res.render("questions", { title: "Questions" });
};

exports.post = function(req, res) {
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
