import { Sequelize, Model, DataTypes } from 'sequelize';

const db = new Sequelize('smartWallet', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// create models
class Transactions extends Model {
  public id!: number;
  public date!: Date;
  public amount!: number;
  public description!: string;
}

class Categories extends Model {
  public id!: number;
  public name!: string;
  public budget!: number;
}

Transactions.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'transactions',
  sequelize: db,
});

Categories.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  budget: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  }
},{
  tableName: 'categories',
  sequelize: db,
});

Categories.hasMany(Transactions);
Transactions.belongsTo(Categories);

Categories.sync();
Transactions.sync();

export { Transactions, Categories };
