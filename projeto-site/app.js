process.env.NODE_ENV = 'production';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var administradorRouter = require('./routes/administrador');
var conquistaRouter = require('./routes/conquista');
var empresaRouter = require('./routes/empresa');
var equipeRouter = require('./routes/equipe');
var funcionarioRouter = require('./routes/funcionario');
var habilidadeRouter = require('./routes/habilidade');
var maquinaRouter = require('./routes/maquina');
var monitoramentoRouter = require('./routes/monitoramento');
var tecnologiaRouter = require('./routes/monitoramento');
var trofeuRouter = require('./routes/trofeu');



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/administrador', administradorRouter);
app.use('/conquista', conquistaRouter);
app.use('/empresa', empresaRouter);
app.use('/equipe', equipeRouter);
app.use('/funcionario', funcionarioRouter);
app.use('/habilidade', habilidadeRouter);
app.use('/maquina', maquinaRouter);
app.use('/monitoramento', monitoramentoRouter);
app.use('/tecnologia', tecnologiaRouter);
app.use('/trofeu', trofeuRouter);


module.exports = app;
