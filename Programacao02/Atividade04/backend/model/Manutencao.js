const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Manutencao = sequelize.define('Manutencao', {
  veiculo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'Manutencao',
});

module.exports = Manutencao;
