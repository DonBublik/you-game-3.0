'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Theme, Game}) {
      this.belongsTo(Theme, { foreignKey: 'user_id' });
      this.hasMany(Game, { foreignKey: 'game_id' });

    }
  }
  Question.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    theme_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
      onDelete: 'CASCADE'
    },
    score: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    img: {
      type: DataTypes.TEXT
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};