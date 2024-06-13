let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroAleatorio = geraradorDeNumero();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute(){
    let chute =  document.querySelector("input").value;
    
    
    if (chute == numeroAleatorio) {
        exibirTextoNaTela("h1", "Acertou");
        exibirTextoNaTela("p", "Você acertou o número secreto :)");

        let plavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas}
            ${plavraTentativa}`;
        
        exibirTextoNaTela("p", mensagemTentativas);

        document.getElementById("reiniciar").removeAttribute("disabled");
        
    
    } else{
        tentativas++;
        if (chute > numeroAleatorio) {
            exibirTextoNaTela("p", "O numero secreto é menor")
    
        }else{
            exibirTextoNaTela("p", "O numero secreto é maior")
        }

        limparCampo();
    }

    console.log(chute == numeroAleatorio);
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function geraradorDeNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite) {
        
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return geraradorDeNumero();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
}

function reiniciarJogo(){
    exibirMensagemInicial()
    numeroAleatorio = geraradorDeNumero();
    limparCampo();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true)
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1","Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um numero de 1 a 10");
}

exibirMensagemInicial();