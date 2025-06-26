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


//validar 
//que los datos no sean vacion 
 export const createCharacters = async(req,res)=> {
    try{
        const {name,ki,race,gender,description} = req.body;

        if (!name || ki === undefined || !race || !gender) {
            return validacionError(res, 'Los campos Nombre, Ki, Race, Gender son obligatorios')
        }
//Validar que ki sea un número entero válido, es decir, que el valor no sea un string ni un
//número con decimales (float). Solo se deben aceptar valores que sean de tipo entero.
        if (!Number.isInterger(ki) || ki < 0){
            return validacionError(res, 'Ki debe ser un número entero válido')
        }
//Validar que el campo gender solo acepte los valores "Male" o "Female". Cualquier otro
//valor debe considerarse inválido y debe generar un mensaje de error.
       if (!['Male', 'Female'].includes(gender)){
        return validacionError(res, 'Género debe ser "Male" o "Female"');
       }

 //asegurarase que description sea una cadena si se incluye
 if(description !== undefined && typeof description !== 'string'){
    return validacionError(res, 'La descripción debe ser una cadena si se proporciona.')
 }   
    }
 };


