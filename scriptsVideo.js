let controles = document.getElementById('video');

let inicio = document.getElementById('iniciar');
let pausar = document.getElementById('pausa');

function iniciar(){
    controles.play()
}


function pausa(){
    controles.pause()
}

pausar.addEventListener('click',pausa)
inicio.addEventListener('click',iniciar)

