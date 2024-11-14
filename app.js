/**
 * simples ssimulador de um botao de panico
 * @author João Victor 
 */

const botao = document.getElementById('botao');
let som = new Audio("som/risadakiko.mp3");


function tocarSom() {
    som.play()
}

function pararsom() {
    som.pause()
}

botao.addEventListener('mousedown', (Event) => {
    Event.preventDefault()
  tocarSom()
})

botao.addEventListener('mouseup', (Event) => {
   Event.preventDefault();
  pararsom()
})

botao.addEventListener('touchstart', (Event) => {
    Event.preventDefault()
  tocarSom()
})

botao.addEventListener('touchend', (Event) => {
   Event.preventDefault();
  pararsom()
})
