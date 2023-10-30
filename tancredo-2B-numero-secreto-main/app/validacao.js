function verificaSeOChutePossuiUmValorValido(chute){
const numero = +chute 

if (chuteForInvalido(numero)){
 elementoChute.innerHTML+='<div>Valor inválido</div>'
}

if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
elementoChute.innerHTML+=`
<div>Valor inválido:Fale um numero entre ${menorvalor} e ${maiorValor}
</div>}`
}

}

function chuteForInvalido(numero){
return number.IsNan(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
return numero > maiorValor || numero < menorValor
}