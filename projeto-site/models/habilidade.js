'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Habilidade = sequelize.define('Habilidade',{
		
		fk_func:{
			type: DataTypes.INTEGER
		},
		fk_tec:{
			type: DataTypes.INTEGER
		}
	}, 
	{
		tableName: 'Habilidade', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Habilidade;
};
