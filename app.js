import express from 'express';
import characterRoutes from "./routes/character.route.js"
import { initDB } from './src/config/database.js';
import dotenv from 'dotenv'; //simplifica la gestión de variables de entorno
//herramientas utilizadas
dotenv.config();
const app = express(); 

app.use(express.json());
app.use("/characters", characterRoutes);

const PORT = process.env.PORT || 4000; 

initDB().then(()=>{
    app.listen(PORT,()=> {
        console,log(`Servidor corriendo en http://localhost:${PORT}`);
    });
});