'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Return extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Return.belongsTo(models.Item, {
        foreignKey: "loan_id"
      });
    }
  }
  Return.init({
    loan_id: DataTypes.BIGINT,
    total_item: DataTypes.INTEGER,
    catatan: DataTypes.STRING,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Return',
  });
  return Return;
};