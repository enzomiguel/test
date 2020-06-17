'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Administrador = sequelize.define('Administrador',{
		idAdmin: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		emailAdmin:{
			type: DataTypes.STRING
		},
		senhaAdmin:{
			type: DataTypes.STRING
		}
	}, 
	{
		tableName: 'administrador', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Administrador;
};
