import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.resolve(__dirname, `../../.env.${process.env.NODE_ENV}`) });

export interface ConfigInterface {
    APP_PORT: string;
    DB_HOST: string;
    DB_PORT: string;
    DB_NAME: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
}

class Config implements ConfigInterface {
    public APP_PORT: string;
    public DB_HOST: string;
    public DB_PORT: string;
    public DB_NAME: string;
    public DB_USERNAME: string;
    public DB_PASSWORD: string;
    public constructor() {
        this.APP_PORT = process.env.APP_PORT;
        this.DB_HOST = process.env.DB_HOST;
        this.DB_PORT = process.env.DB_PORT;
        this.DB_NAME = process.env.DB_NAME;
        this.DB_USERNAME = process.env.DB_USERNAME;
        this.DB_PASSWORD = process.env.DB_PASSWORD;
    }
}

export default new Config();