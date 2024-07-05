const botones = document.querySelectorAll("#btn")
const pantalla = document.querySelector("#pantalla")

console.log(pantalla.textContent)
botones.forEach (boton =>{
    //console.log(boton.textContent)
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent
        console.log(pantalla.textContent)
        if (botonApretado == "AC"){
            pantalla.textContent = "0"
            return
        }else if (botonApretado == "DEL"){
            // agregar el caso de error y el caso infinity
            if(pantalla.textContent.length == 1){ 
                pantalla.textContent = "0" 
                return
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1)
                return
            }
        }else if(botonApretado == "=") {
            // agregar el caso de error y el caso infinity
            try {
                pantalla.textContent = eval(pantalla.textContent)
            } catch (error) {
                pantalla.textContent = "Error!"
            }
        }else{
            if(pantalla.textContent == "0"){
                pantalla.textContent = botonApretado
                return
            }else{ 
                pantalla.textContent = pantalla.textContent + botonApretado
                return
            }
        }
        
    })

})