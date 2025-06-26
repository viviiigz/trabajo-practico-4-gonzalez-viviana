//validaciones
import Character from "../models/character.model";

//funcion para enviar errores de validoacion
const validacionError= async(req,res) =>{
    return res.status(400).json({error:message})
};

//get perosonajes
export const getCharacter = async(req,res) => {
    try{
        const character = await Character.findAll();//para todos los personajes
        res.json(character);
    } catch (error) {
        res.status(500).json({error: "Error al encontrar personajes"})
    };
}; 


//get personajes id
export const getCharacterId = async(req,res)=> {
    try{
        const character = await Character.findByPk(req.params.id);
       if (character) res.json(character);
       else res.status(404).json({error:"No se encontraron personajes que coincidan"
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
        if (!Number.isInteger(ki) || ki < 0){
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
  const existingCharacter = await Character.findOne({ where: { name } });
     if (existingCharacter && existingCharacter.id !== parseInt(id)) {
      return validacionError(res, 'Ya existe un personaje con este nombre.');
      }

  const character = await Character.create({name,ki,race,gender,description})
  res.status(201).json(character);
} catch(error){
    res.status(500).json({error:'Error interno del servidor'});
};
}

//Verificar que el campo name sea único 
export const updateCharacter = async (req,res)=> {
    const {id} = req.params; //extraemos
    const {name, ki, race, gender, description} = req.body; //actuaalizamos

    try { //buscamos el persoanje por id
        const character = await Character.findByPk(id);

        if (!character){
            return res.status(404).json({error:"Personaje no encontrado"})
        }

    //el nombre no debe estar vacio y si es distinto del actual verificar
        if (!name && name !== character.name){
            const existeCharacter = await Character.findOne({where:{name}});
            if (existeCharacter && existeCharacter.id !== character.id) {
                return res.status(400).json({ error: 'Ya existe otro personaje con este nombre.' });
            }
        }
     //actualizar el personaje con los datos recibidos
    await character.update({ name, ki, race, gender, description });
    res.status(200).json(character);

  } catch (error) {
    // Manejo de error por violación de unicidad en Sequelize
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: 'Ya existe un personaje con este nombre.' });
    }
    res.status(500).json({ error: 'Error interno del servidor al actualizar el personaje.' });
    };
};
// DELETE personaje
export const deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    //el personaje con el ID requerido exista 
    const character = await Character.findByPk(id);
    if (!character) {
      return res.status(404).json({ error: 'Personaje no encontrado.' });
    }
    await character.destroy();
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor al eliminar el personaje.' });
  }
};



