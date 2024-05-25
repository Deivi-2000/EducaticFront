import { apiUrls } from "./urls";
interface Calificacion {
    id: CalificacionPkId,
    NOTA: number
}

interface CalificacionPkId {
    ID_USUARIO: string,
    ID_EVALUACION: number
}

export const postCalificacion = async (calificacion: Calificacion) => {

    try{
        const response = await fetch(apiUrls.calificaciones.postCalificacion,
            {cache: 'no-cache',
            method: "POST",
            headers: {"Content-Type": "application/json"},
                body: JSON.stringify(calificacion)
            }
        );
        return calificacion;
    }catch(error) {
        console.log(error);
    }

}

export const getCalificacionesByUsuarioAndEvaluacion  = async (idUsuario: string, idEvaluacion: number) => {
    try{
        const response = await fetch(apiUrls.calificaciones.getByUsuarioAndEvaluacion + idUsuario + "/" + idEvaluacion,
            {cache: 'no-cache'}
        );
        
        const calificacion = await response.json();
        return calificacion;
    }catch(error) {
        console.log(error);
    }
}