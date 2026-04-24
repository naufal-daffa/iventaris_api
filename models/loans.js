'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Loans.belongsTo(models.Item, {
        foreignKey: "item_id"
      });
      Loans.hasOne(models.Return, {
        foreignKey: "loan_id"
      });
    }
  }
  Loans.init({
    item_id: DataTypes.BIGINT,
    name: DataTypes.STRING,
    total_item: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Loans',
  });
  return Loans;
};