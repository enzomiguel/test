'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Empresa = sequelize.define('Empresa',{
		idEmpresa: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nomeEmpresa:{
			type: DataTypes.STRING
		},
		cnpj:{
			type: DataTypes.STRING
		}
	}, 
	{
		tableName: 'empresa', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Empresa;
};
