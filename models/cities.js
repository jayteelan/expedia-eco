'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define('Cities', {
    name: DataTypes.STRING
  }, {});
  Cities.associate = function(models) {
    // associations can be defined here
    Cities.hasMany(models.Hotels, {
      foreignKey: 'city_id',
      onDelete: 'CASCADE'
    })
  };
  return Cities;
};