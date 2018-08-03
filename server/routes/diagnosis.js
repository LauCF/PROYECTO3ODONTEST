const express = require("express");
const router = express.Router();
const Diagnosis = require("../models/Diagnosis");

//Create New Diagnosis
router.post("/", (req, res, next) => {
  console.log(req.body);

  const tagsRecibidos = req.body;
  const diagnostico = checkTags(tagsRecibidos);
  /* const newDiagnosis = new Diaguser({
    user: {type: Schema.Types.ObjectId, ref="User"},
    diagnosis: {type: Schema.Types.ObjectId, ref="Diagnosis"}
  }); */
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

router.get("/", (req, res, next) => {
  Diagnosis.find().then(data => {
    console.log(data);
  });
});

function checkTags(tagsRecibidos) {
  /* objeto: {
    coincidencias: diagnosis
  } */
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
    })
  });

  // buscar coincidencia maxima

  // devolverla
}
//   tagsasociados.forEach(function(e) {
//   tagsRecibidos.forEach(function(j) {
//     return coindidencias++
//   })
// });

module.exports = router;
