require('dotenv').config();

const mongoose = require('mongoose');
const Question = require('../models/Question');
const shared = require('../shared.js');

mongoose.connect(process.env.DBURL).then( () =>  console.log('connected to DB from seedQuestions'));

Question.collection.drop();

const questions = [
    {
        content: "¿Te duele algún diente ó muela de forma espontánea?",
        tag: shared[0].tagname
    },
    {
        content: "¿Tienes movilidad en algún diente ó muela?",
        tag: shared[1].tagname
    },
    {
        content: "¿Presentas sangrado en las encías al cepillarte?",
        tag: shared[2].tagname
    },
    {
        content: "Mira los bordes de tus dientes inferiores, ¿observas desgastes?",
        tag: shared[3].tagname
    },
    {
        content: "¿Te duele algún diente ó muela al tomar alimentos fríos?",
        tag: shared[4].tagname
    },
]

Question.insertMany(questions)
   .then(() => {
       console.log('questions Added!');
       mongoose.disconnect();
   })
   .catch(err => {
       console.log(err);
       mongoose.disconnect();
   })