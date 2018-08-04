const express = require("express");
const router = express.Router();
const Diagnosis = require("../models/Diagnosis");

// Recibir array de tags (strings) del OdonTest
// Recibir Diagnostico de la funcion checkTags
// Crear un nuevo DiagUser en BDD

router.post("/", (req, res, next) => {
  console.log(req.body);

  const tagsRecibidos = req.body;

  const diagnostico = checkTags(tagsRecibidos);
 
  newDiaguser.save(err => {
    if (err) {
      return res.status(500).json(err);
    }
    if (newDiaguser.errors) {
      return res.status(400).json(newDiaguser);
    }

    return res.status(200).json(newDiaguser);
  });
});

//Obtener Diagnostico: encontrar coincidencias y devolver diagnostico de coincidencias maxima
function checkTags(tagsRecibidos) {
 
  let objeto = {};

  Diagnosis.find().then(data => {
    let coincidencias = 0;
    data.forEach(e => {
      coincidencias = 0;
      for (var i = 0; i < tagsRecibidos.length; i++) {
        for (var j = 0; j < e.tagsasociados.length; j++) {
          if (tagsRecibidos[i] === e.tagsasociados[j]) {
            coincidencias++;
          }
        }
      }
      objeto[coincidencias] = e;
    });
  });

  //Buscar coincidencia máxima

  //Devolver coincidencia máxima
}
module.exports = router;

// NOTAS
 /* const newDiagnosis = new Diaguser({
    user: {type: Schema.Types.ObjectId, ref="User"},
    diagnosis: {type: Schema.Types.ObjectId, ref="Diagnosis"}
  }); */

  // router.get("/", (req, res, next) => {
//   Diagnosis.find().then(data => {
//     console.log(data);
//   });
// });