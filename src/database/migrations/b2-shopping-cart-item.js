"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "ShoppingCartItems",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        qty: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        cartId: {
          type: Sequelize.UUID,

          allowNull: false,
          references: {
            model: "ShoppingCarts",
            key: "id",
          },
          allowNull: false,
          unique: "unique_tag",
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        productItemId: {
          type: Sequelize.UUID,
       
          allowNull: false,
          references: {
            model: "ProductItems",
            key: "id",
          },
          allowNull: false,
          unique: "unique_tag",
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        createdAt: {
          type: Sequelize.DATE,
        },
        updatedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        uniqueKeys: {
          unique_tag: {
            customIndex: true,
            fields: ["cartId", "productItemId"],
          },
        },
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ShoppingCartItems");
  },
};
