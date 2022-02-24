//PASOS PARA CONSUMIR GATOS CON API CON JS PURO 

//1-PARA DONDE VAS ( ES LA URI DEL SERVICIO

const URI="https://api.spotify.com/v1/artists/33ScadVnbm2X8kkUqOkC6Z/top-tracks?market=US"

//2.NECESITO PERMISOS
const TOKEN="Bearer BQDCUK8yV8zDVf77-K06dR9lkqL0kTNuGhIwJYjd0EuUj0txNFA9lF_3K126Iy1Y5FUOo4r2jG-CCayy1J1_ZT_cJeoaUvHsasISKXigrs-YitNQe0G9mfUrXW8MMG6o3aab47AJ1l5klG0st7_0D9nQaAxdZVsTinY"

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
     console.log(respuestaJSON.objeto.tranks)
 })
 .catch(respuestaERROR=>{
    console.log(respuestaERROR)
 })
  
    