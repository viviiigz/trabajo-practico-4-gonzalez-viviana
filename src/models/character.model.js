import {DataTypes} from "sequelize"; //contiene los tipos de datos que tiene mi modelo, el string, interger, boolean
import sequelize from "../config/database.js"; //Importe la conexión sequelize configurada anteriormente,la que conecta a mi base de datos

const Character = sequelize.define('Character',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:true, //nombre unico
    },
    ki:{
        type: DataTypes.INTEGER,
        allowNull:false,//OBLIGATOrios
    },
    race:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    gender:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true,//opcional
    },
    
} );

export default Character;






