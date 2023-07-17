import { DataSource } from "typeorm";
import 'reflect-metadata'
import 'dotenv/config'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as number | undefined,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    //synchronize: true,
    logging: true,
    entities: [process.env.ENTITIES as string | Function]
})

export default AppDataSource