'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Equipe = sequelize.define('Equipe',{
		idEquipe: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nomeEquipe:{
			type: DataTypes.STRING
		},
		fk_funcionario:{
			type: DataTypes.INTEGER
		},
		fk_admin:{
			type: DataTypes.INTEGER
		}
	}, 
	{
		tableName: 'Equipe', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Equipe;
};
