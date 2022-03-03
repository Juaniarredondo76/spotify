//PASOS PARA CONSUMIR GATOS CON API CON JS PURO 

//1-PARA DONDE VAS ( ES LA URI DEL SERVICIO)


const URI="https://api.spotify.com/v1/artists/33ScadVnbm2X8kkUqOkC6Z/top-tracks?market=US"

//los parametros siempre seran un objeto
//1-metodo
//2-headers
//3-body
//las constante simpre en mayuscula 

//2.NECESITO PERMISOS
const TOKEN="Bearer BQC-HLb33eIz8AfuCIiG8s-7oi7RdatclDccrFjTZ13FbzzJ3EEeJ8r1ZbQksYzKDTMhXMv2hRpWvHrGAg-bcxjkJm5TvDjOzej5vqIFqg5DU3QAHWcW8rkvRf220A0ydlsUcG_Wmf51_xH7tN1KOt7YC8FtYSD5awY"

//3.CONFIGURO METODOS, CABECERAS Y CUERPOS DE LA PETICION 
let parametrosPeticion={
    method:"GET",
    headers:{ Authorization:TOKEN}
}

//4. ARRANCO PARA EL RESTAURANTE ( CONSUMO  EL API) LE TOCO LA PUERTA AL SERVIDOR 
fetch(URI, parametrosPeticion)
 .then(respuesta=>respuesta.json()     
 )
 .then(respuestaJSON=>{
     
     pintarCanciones(respuestaJSON.tracks)

 })
 .catch(respuestaERROR=>{
    console.log(respuestaERROR)
 })
 //FUNCION PINTAR
 //funcion encargada de recoger los datos y pintar en pantalla 
 function pintarCanciones(canciones){
    console.log("estamos pintando ")
    console.log(canciones)
 }
  
    