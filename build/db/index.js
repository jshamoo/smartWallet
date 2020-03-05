"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db = new sequelize_1.Sequelize('smartWallet', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
// checking connection
// db.authenticate()
//   .then(() => console.log('Connection has been established successfully.'))
//   .catch((error: String) => { console.error('Unable to connect to the database:', error)})
// create models
var Transcations = /** @class */ (function (_super) {
    __extends(Transcations, _super);
    function Transcations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Transcations;
}(sequelize_1.Model));
var Categories = /** @class */ (function (_super) {
    __extends(Categories, _super);
    function Categories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Categories;
}(sequelize_1.Model));
Transcations.init({
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
        allowNull: true,
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
Transcations.belongsTo(Categories);
Categories.hasMany(Transcations);
Transcations.sync();
Categories.sync();
