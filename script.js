const display = document.getElementById('display');
const historico = document.getElementById('historico');

let expressaoAtual = "";
let operacaoCompleta = false;

const frasesMagicas = [
    "Prisma Lunar! 🌙",
    "Superar obstáculos faz as garotas mais bonitas, sabia? 🎀",
    "Pelo Poder do Cristal! ✨",
    "Amor e Justiça! 💖",
    "Cristal de Prata! 💎",
    "Nós todos carregamos estrelas em nossos corações. 🌟",
    "Cetro Espiral do Coração! 🌟",
    "Poder Estelar! ⭐",
    "Doce Coração Rosa! 💕",
    "A fada do amor e da justiça! 🎀"
];

function limparVisor() {
    expressaoAtual = "";
    display.innerText = "0";
    desativarEfeitoMarquee();
    historico.innerText = "";
    operacaoCompleta = false;
}

function apagarUltimo() {
    if (operacaoCompleta) {
        limparVisor();
        return;
    }
    desativarEfeitoMarquee();
    expressaoAtual = expressaoAtual.slice(0, -1);
    display.innerText = formatarParaExibicao(expressaoAtual) || "0";
}

function inserirNumero(numero) {
    if (operacaoCompleta) {
        expressaoAtual = "";
        operacaoCompleta = false;
    }
    desativarEfeitoMarquee();
    if (numero === '.' && expressaoAtual.endsWith('.')) return;
    if (expressaoAtual.length >= 14) return;

    expressaoAtual += numero;
    display.innerText = formatarParaExibicao(expressaoAtual);
}

function inserirOperador(operador) {
    if (expressaoAtual === "" && operador !== '-') return;

    if (operacaoCompleta) {
        operacaoCompleta = false;
    }

    desativarEfeitoMarquee();
    const ultimoChar = expressaoAtual.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(ultimoChar)) {
        expressaoAtual = expressaoAtual.slice(0, -1) + operador;
    } else {
        expressaoAtual += operador;
    }

    display.innerText = formatarParaExibicao(expressaoAtual);
}

/* ===PROCESSADOR MATEMÁTICO NOVO (Resolve contas sem usar o 'eval()')=== */
function calcularExpressaoSegura(expressao) {
    let listaTokens = [];
    let bufferNumero = "";

    for (let i = 0; i < expressao.length; i++) {
        let char = expressao[i];
        if ((char >= '0' && char <= '9') || char === '.') {
            bufferNumero += char;
        } else {
            if (bufferNumero) {
                listaTokens.push(parseFloat(bufferNumero));
                bufferNumero = "";
            }
            
            if (char === '-' && (listaTokens.length === 0 || ['+', '-', '*', '/'].includes(expressao[i - 1]))) {
                bufferNumero += char;
            } else {
                listaTokens.push(char);
            }
        }
    }
    if (bufferNumero) {
        listaTokens.push(parseFloat(bufferNumero));
    }

    for (let i = 0; i < listaTokens.length; i++) {
        if (listaTokens[i] === '%') {
            if (i > 0 && typeof listaTokens[i - 1] === 'number') {
                listaTokens[i - 1] = listaTokens[i - 1] / 100;
                listaTokens.splice(i, 1);
                i--;
            }
        }
    }

    for (let i = 0; i < listaTokens.length; i++) {
        if (listaTokens[i] === '*' || listaTokens[i] === '/') {
            let operador = listaTokens[i];
            let anterior = listaTokens[i - 1];
            let proximo = listaTokens[i + 1];
            if (typeof anterior !== 'number' || typeof proximo !== 'number') return null;

            let calculo = operador === '*' ? anterior * proximo : anterior / proximo;
            listaTokens.splice(i - 1, 3, calculo);
            i--;
        }
    }

    let total = listaTokens[0];
    if (typeof total !== 'number') return null;

    for (let i = 1; i < listaTokens.length; i += 2) {
        let operador = listaTokens[i];
        let proximo = listaTokens[i + 1];
        if (typeof proximo !== 'number') return null;

        if (operador === '+') {
            total += proximo;
        } else if (operador === '-') {
            total -= proximo;
        } else {
            return null;
        }
    }
    return total;
}

function calcularResultado() {
    if (expressaoAtual === "") return;

    try {
        desativarEfeitoMarquee();
        historico.innerText = formatarParaExibicao(expressaoAtual) + " =";

        let resultado = calcularExpressaoSegura(expressaoAtual);

        if (resultado === null || resultado === Infinity || isNaN(resultado)) {
            display.innerText = "Erro Mágico";
            expressaoAtual = "";
        } else {
            if (resultado.toString().includes('.') && resultado.toString().split('.')[1].length > 4) {
                resultado = Number(resultado.toFixed(4));
            }
            display.innerText = resultado.toString().replace('.', ',');
            expressaoAtual = resultado.toString();
        }

        operacaoCompleta = true;

    } catch (erro) {
        display.innerText = "Erro Mágico";
        expressaoAtual = "";
        operacaoCompleta = true;
    }
}

function formatarParaExibicao(valor) {
    return valor
        .replace(/\*/g, ' × ')
        .replace(/\//g, ' ÷ ')
        .replace(/\+/g, ' + ')
        .replace(/\-/g, ' − ')
        .replace(/\./g, ',');
}

function magiaDasFaiscas(evento, quantidade = 12) {
    const iconesMagicos = ['⭐', '💖', '✨', '🌙', '✦', '✧'];
    const container = document.body;

    const baseLeft = evento ? evento.clientX : window.innerWidth / 2;
    const baseTop = evento ? evento.clientY : window.innerHeight / 2;

    for (let i = 0; i < quantidade; i++) {
        const faisca = document.createElement('span');
        faisca.classList.add('faisca');
        faisca.innerText = iconesMagicos[Math.floor(Math.random() * iconesMagicos.length)];
        
        faisca.style.left = `${baseLeft}px`;
        faisca.style.top = `${baseTop}px`;

        const direcaoX = (Math.random() - 0.5) * 150;
        const direcaoY = (Math.random() - 0.5) * 150;

        faisca.style.setProperty('--x', `${direcaoX}px`);
        faisca.style.setProperty('--y', `${direcaoY}px`);

        container.appendChild(faisca);

        setTimeout(() => {
            faisca.remove();
        }, 800);
    }
}

function ativarEfeitoMarquee() {
    historico.classList.add('marquee-text');
}

function desativarEfeitoMarquee() {
    historico.classList.remove('marquee-text');
}

function ativarBrilhoEspecial(evento) {
    const fraseAleatoria = frasesMagicas[Math.floor(Math.random() * frasesMagicas.length)];
    historico.innerText = fraseAleatoria;
    ativarEfeitoMarquee();
    magiaDasFaiscas(evento, 12);
}

document.querySelectorAll('button').forEach(botao => {
    if (botao.id === 'btn-magia') return;

    botao.addEventListener('click', (evento) => {
        magiaDasFaiscas(evento);
        
        const acao = botao.getAttribute('data-action');
        const valor = botao.getAttribute('data-val');

        if (acao === 'clear') limparVisor();
        if (acao === 'backspace') apagarUltimo();
        if (acao === 'number') inserirNumero(valor);
        if (acao === 'operator') inserirOperador(valor);
        if (acao === 'calculate') calcularResultado();
    });
});

// Escuta cliques no botão de magia ✨
const btnMagia = document.getElementById('btn-magia');
if (btnMagia) {
    btnMagia.addEventListener('click', (evento) => {
        ativarBrilhoEspecial(evento);
    });
}