const formulario = [
    {
        pergunta: "Qual é o seu maior objetivo?",
        resposta: [
            { id: 1, texto: "Ser reconhecido e admirado por todos", naruto_pontos: 3, sasuke_pontos: 1, sakura_pontos: 2 },
            { id: 2, texto: "Se tornar mais forte a qualquer custo", naruto_pontos: 1, sasuke_pontos: 3, sakura_pontos: 2 },
            { id: 3, texto: "Ajudar a proteger as pessoas que amo", naruto_pontos: 2, sasuke_pontos: 1, sakura_pontos: 3 }
        ]
    },
    {
        pergunta: "Como você lida com desafios?",
        resposta: [
            { id: 1, texto: "Nunca desisto, mesmo se for difícil", naruto_pontos: 3, sasuke_pontos: 2, sakura_pontos: 1 },
            { id: 2, texto: "Analiso friamente e faço o necessário para vencer", naruto_pontos: 1, sasuke_pontos: 3, sakura_pontos: 2 },
            { id: 3, texto: "Busco equilíbrio e estratégia com cautela", naruto_pontos: 2, sasuke_pontos: 1, sakura_pontos: 3 }
        ]
    },
    {
        pergunta: "Em um trabalho em equipe, você:",
        resposta: [
            { id: 1, texto: "Motiva todos e mantém o espírito alto", naruto_pontos: 3, sasuke_pontos: 1, sakura_pontos: 2 },
            { id: 2, texto: "Prefere agir sozinho", naruto_pontos: 1, sasuke_pontos: 3, sakura_pontos: 1 },
            { id: 3, texto: "Coopera e apoia seus colegas", naruto_pontos: 2, sasuke_pontos: 1, sakura_pontos: 3 }
        ]
    },
    {
        pergunta: "Como você reage quando está com raiva?",
        resposta: [
            { id: 1, texto: "Explodo, mas logo volto ao normal", naruto_pontos: 3, sasuke_pontos: 2, sakura_pontos: 1 },
            { id: 2, texto: "Guardo e uso isso como motivação", naruto_pontos: 1, sasuke_pontos: 3, sakura_pontos: 2 },
            { id: 3, texto: "Tento me controlar e resolver com calma", naruto_pontos: 2, sasuke_pontos: 1, sakura_pontos: 3 }
        ]
    },
    {
        pergunta: "Qual dessas qualidades mais combina com você?",
        resposta: [
            { id: 1, texto: "Determinação", naruto_pontos: 3, sasuke_pontos: 2, sakura_pontos: 1 },
            { id: 2, texto: "Ambição", naruto_pontos: 1, sasuke_pontos: 3, sakura_pontos: 2 },
            { id: 3, texto: "Inteligência", naruto_pontos: 1, sasuke_pontos: 2, sakura_pontos: 3 }
        ]
    },
    {
        pergunta: "O que é mais importante pra você?",
        resposta: [
            { id: 1, texto: "Amizade", naruto_pontos: 3, sasuke_pontos: 1, sakura_pontos: 2 },
            { id: 2, texto: "Poder", naruto_pontos: 1, sasuke_pontos: 3, sakura_pontos: 1 },
            { id: 3, texto: "Crescimento pessoal", naruto_pontos: 2, sasuke_pontos: 1, sakura_pontos: 3 }
        ]
    },
    {
        pergunta: "Como você lida com perdas?",
        resposta: [
            { id: 1, texto: "Sigo em frente com força e esperança", naruto_pontos: 3, sasuke_pontos: 2, sakura_pontos: 1 },
            { id: 2, texto: "Isso me muda profundamente", naruto_pontos: 1, sasuke_pontos: 3, sakura_pontos: 2 },
            { id: 3, texto: "Busco aprender e evoluir com a experiência", naruto_pontos: 2, sasuke_pontos: 1, sakura_pontos: 3 }
        ]
    },
    {
        pergunta: "Qual é o seu estilo de aprendizado?",
        resposta: [
            { id: 1, texto: "Aprendo sozinho", naruto_pontos: 1, sasuke_pontos: 3, sakura_pontos: 1 },
            { id: 2, texto: "Aprendo com certa ajuda dos outros", naruto_pontos: 1, sasuke_pontos: 1, sakura_pontos: 3 },
            { id: 3, texto: "Aprendo com ajuda excessiva dos outros", naruto_pontos: 3, sasuke_pontos: 1, sakura_pontos: 1 }
        ]
    },
    {
        pergunta: "Como você prefere evoluir?",
        resposta: [
            { id: 1, texto: "Treinando duro e persistindo", naruto_pontos: 3, sasuke_pontos: 2, sakura_pontos: 1 },
            { id: 2, texto: "Superando limites rapidamente", naruto_pontos: 1, sasuke_pontos: 3, sakura_pontos: 2 },
            { id: 3, texto: "Estudando e aperfeiçoando técnicas", naruto_pontos: 2, sasuke_pontos: 1, sakura_pontos: 3 }
        ]
    },
    {
        pergunta: "Como você quer ser lembrado?",
        resposta: [
            { id: 1, texto: "Como alguém que nunca desistiu", naruto_pontos: 3, sasuke_pontos: 2, sakura_pontos: 1 },
            { id: 2, texto: "Como alguém extremamente poderoso", naruto_pontos: 1, sasuke_pontos: 3, sakura_pontos: 2 },
            { id: 3, texto: "Como alguém útil e confiável", naruto_pontos: 2, sasuke_pontos: 1, sakura_pontos: 3 }
        ]
    }
];

class QuizNaruto {
    constructor(dados) {
        this.listaPerguntas = dados;
        this.questaoUsuario = 0;
        this.pontos_naruto = 0;
        this.pontos_sasuke = 0;
        this.pontos_sakura = 0;
        
        this.btnIniciar = document.getElementById('btn-iniciar');
        this.telaInicial = document.getElementById('tela-inicial');
        this.secaoQuiz = document.getElementById('Quiz');
        this.perguntaTexto = document.getElementById('pergunta');
        this.respostaBotao = document.getElementById('respostaBotao');
        this.proximo = document.getElementById('proximo');
        this.anterior = document.getElementById('anterior');
        this.imgQuiz = document.getElementById('ImgQuiz');

        if (this.btnIniciar) {
            this.btnIniciar.addEventListener('click', () => this.iniciar());
        }

        if (this.proximo) this.proximo.style.display = 'none';
        if (this.anterior) this.anterior.style.display = 'none';
    }

    iniciar() {
        if (this.telaInicial) this.telaInicial.style.display = 'none'; 
        if (this.secaoQuiz) this.secaoQuiz.style.display = 'flex';   
        this.mostrarPergunta();
    }

    resetar() {
        while (this.respostaBotao.firstChild) {
            this.respostaBotao.removeChild(this.respostaBotao.firstChild);
        }
    }


    mostrarPergunta() {
        this.resetar();
        const perguntaAtual = this.listaPerguntas[this.questaoUsuario];
        const numQuestao = this.questaoUsuario + 1;
        
        this.perguntaTexto.innerHTML = `${numQuestao}. ${perguntaAtual.pergunta}`;

        perguntaAtual.resposta.forEach((respostaAtual) => {
            const botao = document.createElement('button');
            botao.innerHTML = respostaAtual.texto;
            botao.classList.add("resposta"); 
            
            botao.dataset.naruto = respostaAtual.naruto_pontos;
            botao.dataset.sasuke = respostaAtual.sasuke_pontos;
            botao.dataset.sakura = respostaAtual.sakura_pontos;

            botao.addEventListener('click', (event) => this.selectResposta(event));

            this.respostaBotao.appendChild(botao);
        });
    }

    selectResposta(event) {
        const botaoClicado = event.target;
        
        this.pontos_naruto += parseInt(botaoClicado.dataset.naruto);
        this.pontos_sasuke += parseInt(botaoClicado.dataset.sasuke);
        this.pontos_sakura += parseInt(botaoClicado.dataset.sakura);
        this.questaoUsuario++;

        if (this.questaoUsuario < this.listaPerguntas.length) {
            this.mostrarPergunta();
        } else {
            this.exibirResultado();
        }
    }

    exibirResultado() {
        this.resetar();
        let vencedor;

        if (this.pontos_naruto >= this.pontos_sasuke && this.pontos_naruto >= this.pontos_sakura) {
            vencedor = {
                frase: `Naruto Uzumaki! Você nunca desiste e seu caminho ninja é inspirador.<br> Score: ${this.pontos_naruto}`,
                imagem: "naruto_resultado.png"
            };
        } else if (this.pontos_sasuke >= this.pontos_naruto && this.pontos_sasuke >= this.pontos_sakura) {
            vencedor = {
                frase: `Sasuke Uchiha! Você busca poder e segue seu próprio caminho de redenção.<br> Score: ${this.pontos_sasuke}`,
                imagem: "sasuke_resultado.png"
            };
        } else {
            vencedor = {
                frase: `Sakura Haruno! Sua inteligência e controle de chakra são sua maior força.<br> Score: ${this.pontos_sakura}`,
                imagem: "sakura_resultado.png"
            };
        }

        this.perguntaTexto.style.display = 'none';
        if (this.imgQuiz) this.imgQuiz.style.display = 'none';
        
        this.respostaBotao.innerHTML = `
            <div class="tela-resultado">
                <img src="${vencedor.imagem}" class="img-vencedor" alt="Vencedor do Quiz">
                <div class="info-vencedor">
                    <h2>Você tem o Perfil...</h2>
                    <p class="pergunta">${vencedor.frase}</p>
                    <button class="botoes" onclick="location.reload()">Refazer Quiz</button>
                </div>
            </div>
        `;
    }
}

const jogo = new QuizNaruto(formulario);
