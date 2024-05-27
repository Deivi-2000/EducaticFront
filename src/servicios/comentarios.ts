import { apiUrls } from "./urls";
interface Comentario {
    ID_USUARIO: string,
    ID_MATERIA: string,
    TEXTO: string,
    FECHA_CREACION: string,
    HORA_CREACION: string
}

export const postComentario = async (comentario: Comentario) => {

    try{
        const response = await fetch(apiUrls.comentarios.postComentario,
            {cache: 'no-cache',
            method: "POST",
            headers: {"Content-Type": "application/json"},
                body: JSON.stringify(comentario)
            }
        );
        return comentario;
    }catch(error) {
        console.log(error);
    }

}

export const deleteComentario = async (idComentario: number) => {

    try{
        const response = await fetch(apiUrls.comentarios.deleteComentario + idComentario,
            {cache: 'no-cache',
            method: "DELETE",
            }
        );
        return response;
    }catch(error) {
        console.log(error);
    }

}