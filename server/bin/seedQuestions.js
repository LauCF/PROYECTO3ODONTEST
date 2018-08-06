require("dotenv").config();

const mongoose = require("mongoose");
const Question = require("../models/Question");
const shared = require("../shared.js");

mongoose.connect(process.env.DBURL).then(() => {
  console.log("connected to DB from seedQuestions");

  Question.collection.drop().then(() => {
    const questions = [
      {
        content: "¿Te duele algún diente ó muela de forma espontánea?",
        tag: shared.dolor
      },
      {
        content: "¿Tienes movilidad en algún diente ó muela?",
        tag: shared.movilidad
      },
      {
        content: "¿Presentas sangrado en las encías al cepillarte?",
        tag: shared.sangrado
      },
      {
        content:
          "Mira los bordes de tus dientes inferiores, ¿observas desgastes?",
        tag: shared.desgaste
      },
      {
        content: "¿Te duele algún diente ó muela al tomar alimentos fríos?",
        tag: shared.sensibilidad
      }
    ];

    Question.insertMany(questions)
      .then(() => {
        console.log("questions Added!");
        mongoose.disconnect();
      })
      .catch(err => {
        console.log(err);
        mongoose.disconnect();
      });
  });
})
.catch(err => console.log(err));
