import { Sequelize } from 'sequelize';
import Config from "../config";


export const database = new Sequelize(Config.DB_NAME, Config.DB_USERNAME, Config.DB_PASSWORD, {
    dialect: 'mysql',
    host: Config.DB_HOST,
    port: parseInt(Config.DB_PORT),
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: function () {}
});
database.authenticate().then((): void => {
    console.log('Connection has been established successfully.');
}).catch((err): void => {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
});
