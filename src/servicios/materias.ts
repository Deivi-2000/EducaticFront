import { apiUrls } from "./urls";

export const getMaterias = async () => {
    try{
        const response = await fetch(apiUrls.materias.all,
            {cache: 'no-cache'}
        );
        const materias = await response.json();
        return materias;
    }catch(error) {
        console.log(error);
    }
}

export const getMateriaById = async (materia: string) => {
    try{
        const response = await fetch(apiUrls.materias.getById + materia,
            {cache: 'no-cache'}
        );
        const materiaData = await response.json();
        return materiaData;
    }catch(error) {
        console.log(error);
    }
}

export const getModulosByMateria = async (materia: string) => {
    try{
        const response = await fetch(apiUrls.materias.getModulos + materia + '/modulos',
            {cache: 'no-cache'}
        );
        
        const modulos = await response.json();
        return modulos;
    }catch(error) {
        console.log(error);
    }
}

export const getComentariosByMateria = async (materia: string) => {
    try{
        const response = await fetch(apiUrls.materias.getModulos + materia + '/comentarios',
            {cache: 'no-cache'}
        );
        
        const comentarios = await response.json();
        return comentarios;
    }catch(error) {
        console.log(error);
    }
}