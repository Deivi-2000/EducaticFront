import { apiUrls } from "./urls";

export const getEvaluacionesByModulo = async (modulo: string) => {
    try{
        const response = await fetch(apiUrls.modulos.getEvaluaciones + modulo + '/evaluaciones',
            {cache: 'no-cache'}
        );
        
        const modulos = await response.json();
        return modulos;
    }catch(error) {
        console.log(error);
    }
}

export const getEvaluacionesById = async (idEvaluacion: number) => {
    try{
        const response = await fetch(apiUrls.evaluaciones.getById + idEvaluacion,
            {cache: 'no-cache'}
        );
        
        const modulos = await response.json();
        return modulos;
    }catch(error) {
        console.log(error);
    }
}

export const getPreguntasByEvaluacion = async (idEvaluacion: string) => {
    try{
        const response = await fetch(apiUrls.evaluaciones.getPreguntas + idEvaluacion + '/preguntas',
            {cache: 'no-cache'}
        );
        
        const modulos = await response.json();
        return modulos;
    }catch(error) {
        console.log(error);
    }
}