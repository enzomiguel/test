'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Conquista = sequelize.define('Conquista',{
		
		fk_trofeu:{
			type: DataTypes.INTEGER
		},
		fk_func:{
			type: DataTypes.INTEGER
		}
	}, 
	{
		tableName: 'conquistas', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Conquista;
};
