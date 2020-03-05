"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('smartWallet', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
// create models
class Transactions extends sequelize_1.Model {
}
exports.Transactions = Transactions;
class Categories extends sequelize_1.Model {
}
exports.Categories = Categories;
Transactions.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    amount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'transactions',
    sequelize: db,
});
Categories.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    budget: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: true,
    }
}, {
    tableName: 'categories',
    sequelize: db,
});
Categories.hasMany(Transactions);
Transactions.belongsTo(Categories);
Categories.sync();
Transactions.sync();
