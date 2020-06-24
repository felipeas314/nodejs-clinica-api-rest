const Sequelize = require('sequelize');

const DATABASE = process.env.DATABASE || 'clinica';
const USER = process.env.USER || 'postgres';
const PASSWORD = process.env.PASSWORD || 'postgres';

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: '172.17.0.2',
    dialect: 'postgres',
    logging: false,
    pool: {
        max: 50,
        min: 10,
        acquire: 30000,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
        //console.log('Connection has been established successfully.');
    })
    .catch(err => {
        //console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;