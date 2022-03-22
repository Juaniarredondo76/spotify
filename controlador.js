/*
import { resultado } from "./servicio2";
import { pintarCancion } from "./pintar";

pintarCancion(resultado)
*/
//IMPORTACION

import { URI } from "./constantes"

 
//RECIBIR LA OPCION DESEADA DOM 
let  opcion=1  //variable (FUNCIONES)

//OBTENER LA URL DEL SERVIDOR LOGICA/ CONDICIONES 
//(5) CAMINOS (FUNCIONES)

URI='https://api.spotify.com/v1/artists/33ScadVnbm2X8kkUqOkC6Z/top-tracks?market=US'

//obtener 
const parametrosPeticion={
    method:"GET",
    headers:{ Authorization:TOKEN}
} 

//llamar el servidor 
let resultado=await consumirAPI()

//pintar datos traversing
//console.log (resultado)