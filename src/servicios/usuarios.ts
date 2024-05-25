import { apiUrls } from "./urls";
interface Usuario {
    ID_USUARIO: string
    NOMBRE: string
    FECHA_REGISTRO: string
    ID_CARRERA: string
}

export const getUsuarioById = async (idUsuario: string) => {

    try{
        const response = await fetch(apiUrls.usuarios.getById + idUsuario,
            {cache: 'no-cache'}
        );
        const usuario = await response.json();
        return usuario;
    }catch(error) {
        console.log(error);
    }

}

export const postUsuario = async (usuario: Usuario) => {

    try{
        const response = await fetch(apiUrls.usuarios.postUsuario,
            {cache: 'no-cache',
            method: "POST",
            headers: {"Content-Type": "application/json"},
                body: JSON.stringify(usuario)
            }
        );
        return usuario;
    }catch(error) {
        console.log(error);
    }

}