require('dotenv').config();

const mongoose = require('mongoose');
const Diagnosis = require('../models/Diagnosis');
// const shared = require('../shared.js')

mongoose.connect(process.env.DBURL).then( () =>  console.log('connected to DB from seedDiagnoses'));

Diagnosis.collection.drop();

const diagnoses = [
    {
        pathology: "Pulpitis",
        tagsasociados: ["Dolor"],
        treatment: "Endodoncia",
        tips: "Tips para Pulpitis"
    },
    {
        pathology: "Periodontitis",
        tagsasociados: ["Movilidad"],
        treatment: "Raspado y alisado radicular",
        tips: "Tips para Periodontitis"
    },
    {
        pathology: "Gingivitis",
        tagsasociados: ["Sangrado"],
        treatment: "Limpieza",
        tips: "Tips para Gingivitis"
    },
    {
        pathology: "Bruxismo",
        tagsasociados: ["Desgaste"],
        treatment: "Férula de descarga",
        tips: "Tips para Bruxismo",
    },
    {
        pathology: "Sensibilidad",
        tagsasociados: ["Sensibilidad"],
        treatment: "Corregir causas",
        tips: "Tips para Sensibilidad"
    },
]

Diagnosis.insertMany(diagnoses)
   .then(() => {
       console.log('diagnoses Added!');
       mongoose.disconnect();
   })
   .catch(err => {
       console.log(err);
       mongoose.disconnect();
   })