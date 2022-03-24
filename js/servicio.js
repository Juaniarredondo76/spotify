//PASOS PARA CONSUMIR GATOS CON API CON JS PURO 

//1-PARA DONDE VAS ( ES LA URI DEL SERVICIO)


const URI="https://api.spotify.com/v1/artists/33ScadVnbm2X8kkUqOkC6Z/top-tracks?market=US"

//los parametros siempre seran un objeto
//1-metodo
//2-headers
//3-body
//las constante simpre en mayuscula 

//2.NECESITO PERMISOS
const TOKEN="Bearer BQBTUgIIoV-PqIQ3BOlSrbDRKp10O-CbHfQnvjiesCv8BA3nf_nEkVv1PoUpxj4Y6vDi2k_J2heI3c78-Q_2F_dMQFcxhXb5Dt-WlXrksJ7R7Z6BQobAeBIBbfIe8whOJQe7zgEvBXqPM9lrupQDkUkIZ0ir6lrI6Lg"

//3.CONFIGURO METODOS, CABECERAS Y CUERPOS DE LA PETICION 
let parametrosPeticion={
    method:"GET",
    headers:{ Authorization:TOKEN}
}

//4.Consumo el API (Le toco la puerta al servidor)
//el fetch es el metodo para tocarle la puerta al servidor
// fetch(Direccion, configuracion)
fetch(URI,parametrosPeticion)
//si todo funciona verificar que el formato este en json  por las reglas de la REST
.then(respuesta=> respuesta.json())
.then(function(respuesta){
    let fila= document.getElementById("fila")
    
    respuesta.tracks.forEach(function (cancion){  
       /* console.log(cancion.name) 
        console.log(cancion.preview_url) 
        console.log(cancion.album.images[0].url)*/

        let columna=document.createElement("div")
        //a columna le agregagamos la clase col
        columna.classList.add("col")
    
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-100")
        imagen.classList.add("p-3")
        imagen.src=cancion.album.images[0].url

        let separador = document.createElement("hr")
        separador.classList.add("w-50")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")

        let cuadroTexto = document.createElement("div")
        cuadroTexto.classList.add("px-3")
        cuadroTexto.classList.add("text-center")
    
        let nombreCancion = document.createElement("h4")
        nombreCancion.textContent=cancion.name

        let direccionCancion = document.createElement("audio")
        direccionCancion.src=cancion.preview_url
        direccionCancion.setAttribute("controls","controls")


        cuadroTexto.appendChild(nombreCancion)
        cuadroTexto.appendChild(direccionCancion)
    
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(cuadroTexto)
        
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })     
}) 
//si todo falla
.catch(respuesta=> console.log("ERROR: "+respuesta))

function pintarCanciones(canciones){
    console.log("estamos pintando...")
    console.log(canciones)
}