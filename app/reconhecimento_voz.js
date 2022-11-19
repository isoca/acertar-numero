// Web Speech API!
const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    console.log(e)
    chute = e.results[0][0].transcript
    console.log('Exibe o chute')
    exibeChuteNaTela(chute)
    console.log('Verifica o chute')
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div> Você disse </div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start()) // quando função acabar começa de novo