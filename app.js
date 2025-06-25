import express from 'express';
import sequelize from 'sequelize';
import dotenv from 'dotenv'; //simplifica la gestión de variables de entorno
//herramientas utilizadas


const app = express(); 
const PORT = 3000; 

app.get('/', (req,res) => res.json({ok:'true'}));

app.listen (PORT, ()=> console.log("server runnings on http://localhost:" + PORT ));