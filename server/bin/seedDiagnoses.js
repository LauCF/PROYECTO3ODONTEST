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
        tips: "La Pulpitis se define como un proceso inflamatorio que afecta a la pulpa del diente (el tejido blando interior que contiene sus nervios y vasos sanguíneos) a consecuencia de caries o fracturas dentales. Cuando el dolor es intenso y de tipo espontáneo, la pulpitis suele ser de tipo irreversible y requiere de un tratamiento llamado endodoncia que consiste en eliminar la pulpa y sellar el conducto."
      },
      {
        pathology: "Periodontitis",
        tagsasociados: [shared.movilidad],
        treatment: "Raspado y alisado radicular",
        tips: "La Periodontitis es una infección de las encías que daña el tejido blando, destruye el hueso que sostiene los dientes y puede provocar el aflojamiento ó la pérdida de dientes. El raspado y alisado radicular elimina el sarro y las bacterias de la superficie de los dientes y debajo de las encías."
      },
      {
        pathology: "Gingivitis",
        tagsasociados: [shared.sangrado],
        treatment: "Limpieza",
        tips: "La Gingivitis es una enfermedad bucal generalmente bacteriana que provoca inflamación y sangrado de las encías."
      },
      {
        pathology: "Bruxismo",
        tagsasociados: [shared.desgaste],
        treatment: "Férula de descarga",
        tips: "El Bruxismo se conoce también como rechinado o apretado de los dientes. Es una afección muy común."
      },
      {
        pathology: "Sensibilidad",
        tagsasociados: [shared.sensibilidad],
        treatment: "Corregir causas",
        tips: "La sensibilidad dental se produce cuando el esmalte que protege los dientes pierde espesor, o cuando se produce la retracción de las encías, exponiendo la superficie subyacente, la dentina, y reduciendo, por lo tanto, la protección que el esmalte y las encías dan a los dientes y la raíz."
      },
      {
        pathology: "¡Boca Sana!",
        tagsasociados: [],
        treatment: "No necesitas ningún tratamiento",
        tips: "¡Felicidades!"
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
