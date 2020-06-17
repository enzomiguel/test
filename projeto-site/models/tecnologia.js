'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Tecnologia = sequelize.define('Tecnologia',{
		iTecnologia: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nomeTecnologia:{
			type: DataTypes.STRING
		},
		dscricaotec:{
			type: DataTypes.STRING
		}
	}, 
	{
		tableName: 'tecnologia', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Tecnologia;
};
