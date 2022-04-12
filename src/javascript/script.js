const numeroSecreto = parseInt(Math.random() * 10);
let limiteTentativas = 3;
let numeroTentativas = 1;

console.log('NUMERO SECRETO', numeroSecreto);

function chutar() {
  const numeroInserido = document.getElementById('chute').value;
  const elementoTentativas = document.getElementById('tentativas');
  const reultText = document.getElementById('resultado');
  const btnRestart = document.getElementById('#playAgain');

  let dica = '';

  if (+numeroInserido < numeroSecreto) {
    dica = 'o número inserido é MENOR que o número secreto'
  } else {
    dica = 'o número inserido é MAIOR que o número secreto'
  }

  elementoTentativas.innerHTML = numeroTentativas

  if (numeroTentativas <= limiteTentativas) {
    if (+numeroInserido == numeroSecreto) {
      reultText.innerHTML = 'Você acertou! O número secreto era: ' + numeroSecreto + '🏆';

    } else if (numeroInserido > 10 && numeroInserido != Number) {
      alert('você deve inserir um número de 0 a 10.');
    } else {
      reultText.innerHTML = '👎' + dica;
    }
  }

  if (numeroTentativas < limiteTentativas) {
    numeroTentativas = numeroTentativas + 1
  } else {
    reultText.innerHTML = 'fim de jogo! o número secreto é: ' + numeroSecreto + '😢';
  }
}

const btnRestart = document.getElementById('#playAgain');

btnRestart.onclick = () => {

  btnRestart.style.display = 'initial';
  btnRestart.style.display = 'none';
  text_acerto.style.display = 'none';

}