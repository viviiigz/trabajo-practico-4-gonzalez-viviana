import { Sequelize } from "sequelize"; 
import dotenv from "dotenv";
dotenv.config(); //carga automáticamente las variables que tenés en el archivo .env y las guarda en process.env.


export const sequelize = new Sequelize(
    process.env.DB_NAME, //nombre de la bd
    process.env.DB_USER, //usuario
    process.env.DB_PASSWORD, //contraseña
    { 
        host: process.env.DB_HOST, //localhost 
        dialect: process.env.DB_DIALECT, //tipo de mi base de dtos
    }
);


export const initDB = async () => {
    try{
        await sequelize.authenticate();
        console.log("Conexión a MySQL establecida.");
        await sequelize.sync()
    }catch(error){
        console.error("Error al conectar a la base de datos:",error);
    }
};

//aca exporto 