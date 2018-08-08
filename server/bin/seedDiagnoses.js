require('dotenv').config();

const mongoose = require("mongoose");
const Diagnosis = require("../models/Diagnosis");
const shared = require('../shared');

mongoose.connect(process.env.DBURL).then(() => {
  console.log("connected to DB from seedDiagnoses");

  Diagnosis.collection.drop().then(() => {
    const diagnoses = [
      {
        pathology: "Pulpitis",
        tagsasociados: [shared.dolor],
        treatment: "Endodoncia",
        tips: "Tips para Pulpitis"
      },
      {
        pathology: "Periodontitis",
        tagsasociados: [shared.movilidad],
        treatment: "Raspado y alisado radicular",
        tips: "Tips para Periodontitis"
      },
      {
        pathology: "Gingivitis",
        tagsasociados: [shared.sangrado],
        treatment: "Limpieza",
        tips: "Tips para Gingivitis"
      },
      {
        pathology: "Bruxismo",
        tagsasociados: [shared.desgaste],
        treatment: "Férula de descarga",
        tips: "Tips para Bruxismo"
      },
      {
        pathology: "Sensibilidad",
        tagsasociados: [shared.sensibilidad],
        treatment: "Corregir causas",
        tips: "Tips para Sensibilidad"
      },
      {
        pathology: "¡Boca Sana!",
        tagsasociados: [],
        treatment: "No necesitas ningún tratamiento",
        tips: "Tips para Boca Sana"
      }
    ];

    Diagnosis.insertMany(diagnoses)
      .then(() => {
        console.log("diagnoses Added!");
        mongoose.disconnect();
      })
      .catch(err => {
        console.log(err);
        mongoose.disconnect();
      });
  })
  .catch(err => console.log(err));
})
.catch(err => console.log(err));
