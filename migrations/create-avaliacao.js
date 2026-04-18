'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Avaliações', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      nota: { type: Sequelize.INTEGER, allowNull: false },
      pedido_id: { 
        type: Sequelize.INTEGER, 
        references: { model: 'Pedidos', key: 'id' },
        onDelete: 'CASCADE' 
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('Avaliações');
  }
};