function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);
        
        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito')

            if (quantidade > (ate - de + 1)) {
                alert('O intervalo "Do número" - "Até o número" deve ser menor que a "Quantidade de números" aplicada');
                return;
            }
        }
    }
    sorteados.push(numero);

    if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

    alterarStatusBotoa();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;//tirado do MDN web - retorna um número inteiro aleatório
}

function alterarStatusBotoa() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container_botao-desabilitado')) {
        botao.classList.remove('container_botao-desabilitado');
        botao.classList.add('container_botao');
    } else {
        botao.classList.remove('container_botao');
        botao.classList.add('container_botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quntidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').value = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotoa();
}