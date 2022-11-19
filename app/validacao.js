function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (chuteForInvalido(numero)){
        console.log('Valor Inválido não é um número')
        elementoChute.innerHTML += `<div> Valor Inválido: Fale um número </div>`
        return 
    }

    if (numeroForMaiorOuMenorQueOPermitido(numero)){
        console.log('Valor Inválido número muito pequeno ou grande')
        elementoChute.innerHTML += `
        <div> Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor} </div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2> Você acertou! </h2>
        <h3> O número secreto era ${numeroSecreto} </h3>

        <button id="jogar-novamente" class="btn-jogar"> Jogar novamente </button>
        `
        return
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div> O número secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>
        `
    } else {
        elementoChute.innerHTML += `
        <div> O número secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>
        `
    }

}

function numeroForMaiorOuMenorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})

