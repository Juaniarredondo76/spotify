import {URI,parametrosPeticion} from './constantes.js'

//FUNCION PARA LLAMAR DATOS DEL SERVIDORS
//DE CUALQUIER SERVIDOR CON JS PURO
async function consumirAPI(TOKEN,URI){
        let parametrosPeticion={
            method:"GET",
            headers:{ Authorization:TOKEN}
    }
    let respuesta= await fetch(URI, parametrosPeticion)
    let canciones=respuesta.json()
    return (canciones)
}
export let resultado=await consumirAPI()