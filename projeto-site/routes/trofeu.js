var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Trofeu = require('../models').Trofeu; // aqui você coloca o mapeamento do modelo que irá utilizar nessa route

/* Select na tabela do modelo*/
router.get('/select', function (req, res, next) {

  const instrucaoSql = `select * from trofeu;`;

  sequelize.query(instrucaoSql, {
    model: Trofeu, // aqui voce coloca o model configurado acima
    mapToModel: true
  })
    .then(resultado => {
      console.log(`Encontrados: ${resultado.length}`);
      res.json(resultado);
    }).catch(erro => {
      console.error(erro);
      res.status(500).send(erro.message);
    });
});

module.exports = router;
