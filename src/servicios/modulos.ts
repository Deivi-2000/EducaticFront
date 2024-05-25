import { apiUrls } from "./urls";

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