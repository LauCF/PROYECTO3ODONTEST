const express = require("express");
const router = express.Router();
const Diagnosis = require("../models/Diagnosis");
const Diaguser = require("../models/Diaguser");

// Recibir array de tags (strings) del OdonTest
// Recibir Diagnostico de la funcion checkTags
// Crear un nuevo DiagUser en BDD

router.post("/", (req, res, next) => {

  const tagsRecibidos = req.body;
  // console.log(tagsRecibidos);

  //Si no se reciben tags: se recupera y guarda el diagnóstico Boca Sana
  // Diagnosis.findOne()
  // .then(diagnosis => {
  //   if (tagsRecibidos === 0) {
  //     diaguser
  //       .save()
  //       .then(diag => res.status(200).json(diag))
  //       .catch(err => res.status(500).json(err));
  //   } else {
  //Lo que ya está hecho
  //   }
  // });
    
  checkTags(tagsRecibidos).then(idDiagnostico => {
    console.log(idDiagnostico);
    
    console.log(req.user);
    let newDiaguser = new Diaguser({
      user: req.user._id,
      diagnosis: idDiagnostico
    });
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
});

//Buscar coincidencias máximas
//Devolver diagnóstico de coincidencias máxima
function checkTags(tagsRecibidos) {
  return new Promise((resolve, reject) => {
    let objeto = {};

    Diagnosis.find()
      .then(data => {
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
          objeto[e._id] = coincidencias;
        });
        // console.log(objeto);
        //Buscar coincidencia máxima
        let max = 0;
        let idDiagnostico = "";
        Object.keys(objeto).forEach(e => {
          if (objeto[e] > max) {
            max = objeto[e];
            idDiagnostico = e;
          }
        });
        // console.log(max)
        // console.log(idDiagnostico)
        resolve(idDiagnostico);
      })
      .catch(err => reject(err));
  });
}
module.exports = router;
