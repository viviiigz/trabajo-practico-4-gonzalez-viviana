import { Sequelize } from "sequelize"; 
import dotenv from "dotenv";
dotenv.config(); //carga automáticamente las variables que tenés en el archivo .env y las guarda en process.env.


const sequelize = new Sequelize(
    process.env.DB_NAME, //nombre de la bd
    process.env.DB_USER, //usuario
    process.env.DB_PASSWORD, //contraseña
    { 
        host: process.env.DB_HOST, //localhost 
        dialect: process.env.DB_DIALECT, //tipo de mi base de dtos
    }
);

export default sequelize; //aca exporto 