'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notifications.belongsTo(models.User);
    }
  }
  Notifications.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    isRead: DataTypes.BOOLEAN,
    userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
            model: 'Users',
            key: 'id'
        },
    },
  }, {
    sequelize,
    modelName: 'Notifications',
  });
  return Notifications;
};