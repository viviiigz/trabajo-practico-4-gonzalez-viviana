//validaciones
import Character from "../models/character.model";

//funcion para enviar errores de validoacion
const validacionError= async(req,res) =>{
    return res.status(400).json({error:error.message})
};

//get perosonajes
export const getCharacter = async(req,res) => {
    try{
        const character = Character.findAll();//para todos los personajes
        res.json(character);
    } catch (error) {
        res.status(500).json({error: "Error al encontrar personajes"})
    };
}; 


//get personajes id
export const getCharacterId = async(req,res)=> {
    try{
        const character = Character.findByPk(req.params.id);
       if (character) res.json(character);
       else res.status(400).json({error:"No se encontraron personajes que coincidan"
        })
    } catch (error){
        res.status(500).json({error:error.message})
    }
};




