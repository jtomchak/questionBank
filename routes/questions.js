var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render("questions", { title: "Questions" });
});

router.post("/", function(req, res) {
  console.log(req.body.question);
  console.log(req.body.answer);
  console.log(req.body.author);
  res.send("Post page");
});

module.exports = router;
