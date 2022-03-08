import {URI,parametrosPeticion} from './constantes.js'

//FUNCION PARA LLAMAR DATOS DEL SERVIDORS
//DE CUALQUIER SERVIDOR CON JS PURO
async function consumirAPI(){
    let respuesta= await fetch(URI, parametrosPeticion)
    let cancion=respuesta.json()
    return(cancion)
}
export let resultado=await consumirAPI()