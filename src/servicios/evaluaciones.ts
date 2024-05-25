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