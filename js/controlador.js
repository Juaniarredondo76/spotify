
import { resultado } from "./servicio2.js";
import { pintarCancion } from "./pintarCanciones.js";
import{TOKEN} from './generarToken.js'
import{generarURI} from'./generadorUri.js'

console.log(TOKEN )
console.log(resultado)
console.log(pintarCancion)

//rutina para detectar el click del boton del formulario
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){

        evento.preventDefault()

        let frutasSeleccionada=document.getElementById("Artistas").value  
        let URI=generarURI(frutasSeleccionada)

        async function activarAPI(){
            let datosconsultadosApi= await consumirAPI(URI,TOKEN)
            console.log(datosconsultadosApi)

     }
     activarAPI()
    
})
    let resultado=await consumirAPI()