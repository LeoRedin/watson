const express = require("express");

const router = express.Router();

const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1.js");
const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: "2018-11-16",
  iam_apikey: "ZCstjEhC0HuebB60X3aLewL2NK4LQnLyH6VqOqtgXEQX",
  url: "https://gateway.watsonplatform.net/natural-language-understanding/api"
});

router.post("/", (req, res, next) => {
  const analyzeParams = {
    text: req.body.message,
    features: {
      categories: {
        limit: 2
      },
      concepts: {
        limit: 3
      },
      entities: {
        sentiment: true,
        limit: 2
      }
    },
    language: "pt"
  };

  naturalLanguageUnderstanding
    .analyze(analyzeParams)
    .then(analysisResults => {
      console.log(JSON.stringify(analysisResults, null, 2));
      res.status(200).json({
        message: "response ok",
        response: analysisResults
      });
    })
    .catch(err => {
      console.log("error:", err);
      res.status(500).send({
        message: "request error",
        error: err
      });
    });
});

module.exports = router;
