import { DataTypes } from 'sequelize';
import connection from './Connection.js';

const Avaliacao = connection.define('Avaliacao', {
  nota: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  comentario: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Pedidos',
      key: 'id'
    }
  }
}, {
  tableName: 'avaliacoes',
  timestamps: true
});

export default Avaliacao;