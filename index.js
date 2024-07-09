const botones = document.querySelectorAll("#btn")
const pantalla = document.querySelector("#pantalla")
//const botones2 = document.querySelectorAll("button") usar esta linea para el proyecto propip en vez de la linea 1

console.log(pantalla.textContent)
botones.forEach (boton =>{
    //console.log(boton.textContent)
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent
        console.log(pantalla.textContent)
        if (pantalla.textContent == "Error!"|| pantalla.textContent == "Infinity") {
            pantalla.textContent = "0"
        }else{
            if (botonApretado == "AC"){
                pantalla.textContent = "0"
                return
            }else if (botonApretado == "DEL"){
                
                if(pantalla.textContent.length == 1){ 
                    pantalla.textContent = "0" 
                    return
                }else{
                    pantalla.textContent = pantalla.textContent.slice(0,-1)
                    return
                }
            }else if(botonApretado == "=") {
      
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
        }
        
    })

})