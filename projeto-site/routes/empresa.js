var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Empresa = require('../models').Empresa; // aqui você coloca o mapeamento do modelo que irá utilizar nessa route
// var Administrador = require('../models').Administrador;

router.post('/cadastrar', function(req, res, next) {
	console.log('Inserindo novo Funcionario');

	var nomeEmpresa = req.body.nomeEmpresa; // depois de .body, use o nome (name) do campo em seu formulário de login
  var cnpj = req.body.cnpj; // depois de .body, use o nome (name) do campo em seu formulário de login	
//   var emailAdmin = req.body.emailAdmin;
//   var senhaAdmin = req.body.senhaAdmin;
 
//   let instrucaoSql1 = `select * from administrador where emailAdmin =${emailAdmin} and senhaAdmin = ${senhaAdmin}`
//   ; 
//   sequelize.query(instrucaoSql, {
//     model: Administrador,
//     mapToModel: true
// }).then(resultado => {
//     console.log('Empresa cadastrada');
// }).catch(erro => {
//     console.error(erro);
//     res.status(500).send(erro.message);
//   });

  let instrucaoSql = `insert into empresa (nomeEmpresa, cnpj) values
   ('${nomeEmpresa}',' ${cnpj}');`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
    model: Empresa,
    mapToModel: true
}).then(resultado => {
    console.log('Empresa cadastrada');
}).catch(erro => {
    console.error(erro);
    res.status(500).send(erro.message);
  });
});



/* Select na tabela do modelo*/
router.get('/select', function (req, res, next) {

  const instrucaoSql = `select * from empresa;`;

  sequelize.query(instrucaoSql, {
    model: Empresa, // aqui voce coloca o model configurado acima
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
