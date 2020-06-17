'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Maquina = sequelize.define('Maquina',{
		IdMaquina: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		status:{
			type: DataTypes.STRING
		},
		fk_func:{
			type: DataTypes.INTEGER
		}
	}, 
	{
		tableName: 'Maquina', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Maquina;
};
