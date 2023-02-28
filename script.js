const frm = document.querySelector("form");
const respostaErros = document.getElementById("erros");
const respostaChances = document.getElementById("chances");
const respostaDica = document.getElementById("dica");

const erros = [];
const sorteado = Math.floor(Math.random() * 100) + 1;
const chances = 6;

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inputNumero.value);
    if (numero == sorteado) {
        respostaDica.innerText = `Parabéns! Você acertou o número sorteado: ${sorteado}`;
        frm.botaoSubmit.disabled = true;
        frm.botaoNovo.className = "exibe";
    }
    else {
        if (erros.includes(numero)) {
            alert(`Você já apostou o número ${numero}. Tente outro número!`);
        }
        else {
            erros.push(numero);
            const numeroErros = erros.length;
            const numeroChances = chances - numeroErros;
            respostaErros.innerText = `${numeroErros} (${erros.join(", ")})`;
            respostaChances.innerText = numeroChances;
            if (numeroChances == 0) {
                alert(`Suas chances acabaram!`);
                frm.botaoSubmit.disabled = true;
                frm.botaoNovo.className = "exibe";
                respostaDica.innerText = `Fim de jogo. Número sorteado: ${sorteado}`;
            }
            else {
                const dica = numero < sorteado ? "maior" : "menor";
                respostaDica.innerText = `Dica: Tente um número ${dica} que ${numero}...`
            }
        }
    }
    frm.inputNumero.value = "";
    frm.inputNumero.focus();
})