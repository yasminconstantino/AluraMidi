"use strict"

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);


    if(elemento && elemento.localName === 'audio') {
            elemento.play();
        }

    else {
        alert('Elemento não encontrado ou seletor invalido');
        //console.log('Elemento não encontrado');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
// referencia constante, terá sempre o mesmo valor

//let contador = 0
// referencia variavel, sempre terá um valor novo

for ( let cotador = 0; cotador < listaDeTeclas.length; cotador++) {

    const Tecla = listaDeTeclas[cotador];
    const Instrumento = Tecla.classList[1];
    //template string
    const idAudio = `#som_${Instrumento}`;

    //console.log(idAudio);

    Tecla.onclick = function() {
        tocaSom(idAudio);
    }

    Tecla.onkeydown = function (evento) {

        if (evento.code ==='Space' || evento.code === 'Enter') {
            Tecla.classList.add('ativa');
        }

    }

    Tecla.onkeyup = function() {
        Tecla.classList.remove('ativa');
    }

}
