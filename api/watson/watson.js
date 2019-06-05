const NaturalLanguageUnderstandingV1 = require("ibm-watson/natural-language-understanding/v1.js");
const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: "2018-11-16",
  iam_apikey: "ZCstjEhC0HuebB60X3aLewL2NK4LQnLyH6VqOqtgXEQX",
  url: "https://gateway.watsonplatform.net/natural-language-understanding/api"
});

//setar o texto nesta constante
const userInput = "Eu adoro tomar café da manhã com biscoitos de chocolate!";

const analyzeParams = {
  text: userInput,
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
  })
  .catch(err => {
    console.log("error:", err);
  });

//No response vem um monte de coisa, eu sugiro exibir para o usuario os valores de concepts.text
//e principalmente categories.label, que seria o assunto do texto
