import { Sequelize, Model, DataTypes } from 'sequelize';

const db = new Sequelize('smartWallet', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// checking connection
// db.authenticate()
//   .then(() => console.log('Connection has been established successfully.'))
//   .catch((error: String) => { console.error('Unable to connect to the database:', error)})


// create models
class Transcations extends Model {
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

Transcations.init({
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
    allowNull: true,
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

Transcations.belongsTo(Categories);
Categories.hasMany(Transcations);

Transcations.sync();
Categories.sync();
