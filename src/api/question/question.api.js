var Question = require("../../controllers/question/question.model");

exports.questionsByAuthor = function(req, res) {
  var reqAuthor = req.query.author;
  reqAuthor =
    reqAuthor.charAt(0).toUpperCase() + reqAuthor.slice(1).toLowerCase();

  Question.find({ author: reqAuthor })
    .sort({ createdAt: "desc" })
    .limit(25)
    .exec(function(err, questions) {
      if (err) return next(err);
      res.send({ questions });
    });
};
