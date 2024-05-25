import { apiUrls } from "./urls";
interface Matricula {
    id: idMatricula,
    SEMESTRE: string,
    ESTADO: string
}

interface idMatricula {
    ID_USUARIO: string,
    ID_MATERIA: string
}

export const postMatricula = async (matricula: Matricula) => {
    try{
        const response = await fetch(apiUrls.matriculas.postMatricula,
            {cache: 'no-cache',
            method: "POST",
            headers: {"Content-Type": "application/json"},
                body: JSON.stringify(matricula)
            }
        );
        return matricula;
    }catch(error) {
        console.log(error);
    }
}

export const getMateriasByIdUsuario = async (idUsuario: string) => {

    try{
        const response = await fetch(apiUrls.matriculas.getMateriasByUsuario + idUsuario,
            {cache: 'no-cache'}
        );
        const usuario = await response.json();
        return usuario;
    }catch(error) {
        console.log(error);
    }

}
