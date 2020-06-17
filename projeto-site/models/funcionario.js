'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Funcionario = sequelize.define('Funcionario',{
		idFunc: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		emailFunc:{
			type: DataTypes.STRING
		},
		senhaFunc:{
			type: DataTypes.STRING
		},
		telefoneFunc:{
			type: DataTypes.STRING
		},
		funcaoFunc:{
			type: DataTypes.STRING
		},
		dataCadastro:{
			type: DataTypes.STRING
		},
		horasMes:{
			type: DataTypes.FLOAT
		},
		horasSemana:{
			type: DataTypes.FLOAT
		},
		fk_admin:{
			type: DataTypes.INTEGER
		},
		fk_empresa:{
			type: DataTypes.INTEGER
		},
		fk_maquina:{
			type: DataTypes.INTEGER
		}
	}, 
	{
		tableName: 'funcionario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Funcionario;
};
