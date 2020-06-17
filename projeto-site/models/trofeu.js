'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Trofeu = sequelize.define('Trofeu',{
		idTrofeu: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nomeTrofeu:{
			type: DataTypes.STRING
		},
		descricaoTrofeu:{
			type: DataTypes.STRING
		}
	}, 
	{
		tableName: 'trofeu', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Trofeu;
};
