import express from 'express';
import {getCharacter,
  getCharacterId,
  createCharacters,
  updateCharacter,
  deleteCharacter,
} from '../controllers/character.controllers.js';

const router = express.Router();

router.get('/', getCharacter); // Devolver todos los personajes registrados 
router.get('/:id', getCharacterId); // Devolver un personaje por su id
router.post('/', createCharacters); // Crear un nuevo personaje 
router.put('/:id', updateCharacter); // Actualizar los datos de un personaje existente con validación y verificación de existencia y unicidad de name
router.delete('/:id', deleteCharacter); // Eliminar un personaje 

export default router;