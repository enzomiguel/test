'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Monitoramento = sequelize.define('Monitoramento',{
		idMonitoramento: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		valorCPU:{
			type: DataTypes.FLOAT
		},
		valorMemoria:{
			type: DataTypes.INTEGER
		},
		valorDisco:{
			type: DataTypes.INTEGER
		},
		fk_maquina:{
			type: DataTypes.INTEGER
		}
	}, 
	{
		tableName: 'monitoramento', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Monitoramento;
};
