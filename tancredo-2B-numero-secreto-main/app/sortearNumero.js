const menorValor=1;
const maiorValor=700;

const numeroSecreto = gerarNumeroSecreto()

function gerarNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('Número Secreto:', numeroSecreto)

const elementoMenorValor= document.getElementById('menor-valor')
elementoMenorValor.innerHTML= menorValor

const elementoMaiorValor= document.getElementById('maior-valor')
elementoMaiorValor.innerHTML= maiorValor

if (numero===numeroSecreto){
document.body.innerHTML=`
<h2>Você acertou!</h2>
<h3>O número secreto era ${numeroSecreto}</h3>
`
}

else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `

}  else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
}
