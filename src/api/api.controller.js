var Question = require("../controllers/question/question.model");

exports.getByAuthor = function(req, res, next) {
  var authorName = req.query.author;
  Question.find({ author: authorName })
    .sort({ createdAt: "desc" })
    .limit(25)
    .exec(function(err, questionsPayload) {
      if (err) return next(err);
      if (questionsPayload.length == 0) {
        return res.status(204).send();
      }
      res.json(questionsPayload);
    });
};
