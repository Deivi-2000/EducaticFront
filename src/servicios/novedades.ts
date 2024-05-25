import { apiUrls } from "./urls";


export const getNovedades = async () => {

    try{
        const response = await fetch(apiUrls.novedades.all,
            {cache: 'no-cache'}
        );
        const novedades = await response.json();
        return novedades;
    }catch(error) {
        console.log(error);
    }

}