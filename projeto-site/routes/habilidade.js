var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Habilidade = require('../models').Habilidade; // aqui você coloca o mapeamento do modelo que irá utilizar nessa route

/* Select na tabela do modelo*/
router.get('/select', function (req, res, next) {

  const instrucaoSql = `select * from habilidade;`;

  sequelize.query(instrucaoSql, {
    model: Habilidade, // aqui voce coloca o model configurado acima
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
