const botonInfo = document.getElementById("boton-info")
const infoPadre = document.getElementById("info-individual")


function agregarDiv(e){
    
    const divCreado = document.createElement("div")
    divCreado.classList.add("div-creado")
    infoPadre.insertBefore(divCreado, infoPadre.children)
    
}


botonInfo.addEventListener("click", agregarDiv)
