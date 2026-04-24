const formulario =() => {
    {pergunta:"Qual é o seu maior objetivo?"
        resposta:[
            {id:1, texto: "Ser reconhecido e admirado por todos",naruto_pontos: 3,sasuke_pontos: 1, sakura_pontos: 2},
            {id:2, texto: "Se tornar mais forte a qualquer custo",naruto_pontos: 1,sasuke_pontos: 3, sakura_pontos: 2},
            {id:3, texto: "Ajudar a proteger as pessoas que amo",naruto_pontos: 2,sasuke_pontos: 1, sakura_pontos: 3}
        ]
    }
        {pergunta:"Como você lida com desafios?"
        resposta:[
            {id:1, texto: "Nunca desisto,mesmo se for difícil",naruto_pontos: 3,sasuke_pontos: 2, sakura_pontos: 1},
            {id:2, texto: "Analiso friamente e faço o necessário para vencer",naruto_pontos: 1,sasuke_pontos: 3, sakura_pontos: 2},
            {id:3, texto: "Busco equilíbrio e estratégiacom cautela",naruto_pontos: 2,sasuke_pontos: 1, sakura_pontos: 3}
        ]
    }
        {pergunta:"Em um trabalho em equipe, você:"
        resposta:[
            {id:1, texto: "Motiva todos e mantém o espírito alto",naruto_pontos: 3,sasuke_pontos: 1, sakura_pontos: 2},
            {id:2, texto: "Prefere agir sozinho",naruto_pontos: 1,sasuke_pontos: 3, sakura_pontos: 1},
            {id:3, texto: "Coopera e apoia seus colegas",naruto_pontos: 2,sasuke_pontos: 1, sakura_pontos: 3}
        ]
    }
        {pergunta:"Como você reage quando está com raiva?"
        resposta:[
            {id:1, texto: "Explodo, mas logo volto ao normal",naruto_pontos: 3,sasuke_pontos: 2, sakura_pontos: 1},
            {id:2, texto: "Guardo e uso isso como motivação",naruto_pontos: 1,sasuke_pontos: 3, sakura_pontos: 2},
            {id:3, texto: "Tento me controlar e resolver com calma",naruto_pontos: 2,sasuke_pontos: 1, sakura_pontos: 3}
        ]
    }
       {pergunta:"Qual dessas qualidades mais combina com você?"
        resposta:[
            {id:1, texto: "Determinação",naruto_pontos: 3,sasuke_pontos: 2, sakura_pontos: 1},
            {id:2, texto: "Ambição",naruto_pontos: 1,sasuke_pontos: 3, sakura_pontos: 2},
            {id:3, texto: "Inteligência",naruto_pontos: 1,sasuke_pontos: 2, sakura_pontos: 3}
        ]
    }
       {pergunta:"O que é mais importante pra você?"
        resposta:[
            {id:1, texto: "Amizade",naruto_pontos: 3,sasuke_pontos: 1, sakura_pontos: 2},
            {id:2, texto: "Poder",naruto_pontos: 1,sasuke_pontos: 3, sakura_pontos: 1},
            {id:3, texto: "Crescimento pessoas",naruto_pontos: 2,sasuke_pontos: 1, sakura_pontos: 3}
        ]
    }
       {pergunta:"Como você lida com perdas?"
        resposta:[
            {id:1, texto: "Sigo em frente com força e esperança",naruto_pontos: 3,sasuke_pontos: 2, sakura_pontos: 1},
            {id:2, texto: "Isso me muda profundamente", naruto_pontos: 1,sasuke_pontos: 3, sakura_pontos: 2},
            {id:3, texto: "Busco aprender e evoluir com a experiência",naruto_pontos: 2,sasuke_pontos: 1, sakura_pontos: 3}
        ]
    }
       {pergunta:"Qual é o seu estilo de aprendizado?"
        resposta:[
            {id:1, texto: "Aprendo sozinho",naruto_pontos: 1,sasuke_pontos: 3, sakura_pontos: 1},
            {id:2, texto: "Aprendo com certa ajuda dos outros",naruto_pontos: 1,sasuke_pontos: 1, sakura_pontos: 3},
            {id:3, texto: "Aprendo com ajuda excessiva dos outros",naruto_pontos: 3,sasuke_pontos: 1, sakura_pontos: 1}
        ]
    }
        {pergunta:"Como você prefere evoluir?"
        resposta:[
            {id:1, texto: "Treinando duro e persistindo",naruto_pontos: 3,sasuke_pontos: 2, sakura_pontos: 1},
            {id:2, texto: "Superando limites rapidamente",naruto_pontos: 1,sasuke_pontos: 3, sakura_pontos: 2},
            {id:3, texto: "Estudando e aperfeiçoando técnicas",naruto_pontos: 2,sasuke_pontos: 1, sakura_pontos: 3}
        ]
    }
        {pergunta:"Como você quer ser lembrado?"
        resposta:[
            {id:1, texto: "Como alguém que nunca desistiu",naruto_pontos: 3,sasuke_pontos: 2, sakura_pontos: 1},
            {id:2, texto: "Como alguém extremamente poderoso",naruto_pontos: 1,sasuke_pontos: 3, sakura_pontos: 2},
            {id:3, texto: "Como alguém útil e confiável",naruto_pontos: 2,sasuke_pontos: 1, sakura_pontos: 3}
        ]
    }
};

var pergunta = document.getElementById('pergunta')
var resposta = document.getElementsByClassName('resposta')
var resposta1 = document.getElementById('resposta1')
var resposta2 = document.getElementById('resposta2') 
var resposta3 = document.getElementById('resposta3')
var proximo = document.getElementById('proximo')
var anterior = document.getElementById('anterior')
var respostaBotao = document.getElementById('respostaBotao');


let questaoUsuario = 0;
let pontos_naruto = 0;
let pontos_sasuke = 0;
let pontos_sakura = 0;


const Iniciar = ()=>{
    proximo.innerHTML = 'Próximo'
    mostrarPergunta()
}

const resetar = () => {
    proximo.style.display = 'none';
    anterior.style.display = 'none';
    while (respostaBotao.firstChild) {
        respostaBotao.removeChild(respostaBotao.firstChild);
    }
}

const mostrarPergunta = ()=>{
    resetar()
    let perguntaAtual = formulario[questaoUsuario]
    let numQuestao = questaoUsuario +1

    pergunta.innerHTML = numQuestao + ". " + perguntaAtual.pergunta

    perguntaAtual.resposta.forEach((respostaAtual) => {

        const botoesTratados= document.createElement('button')
        botoesTratados.innerHTML = respostaAtual.texto
        botoesTratados.classList.add("resposta")
        botoesTratados.dataset.naruto = respostaAtual.naruto_pontos;
        botoesTratados.dataset.sasuke = respostaAtual.sasuke_pontos;
        botoesTratados.dataset.sakura = respostaAtual.sakura_pontos;
        botoesTratados.addEventListener('click', selectResposta);

        respostaBotao.appendChild(botoesTratados)
})}


const selectResposta= (event)=>{
    const botaoClicado = event.target
    pontos_naruto += parseInt(botaoClicado.dataset.naruto);
    pontos_sasuke += parseInt(botaoClicado.dataset.sasuke);
    pontos_sakura += parseInt(botaoClicado.dataset.sakura);
    questaoUsuario++;
    if (questaoUsuario < formulario.length) {
        mostrarPergunta();
    } else {
        exibirResultado(); 
    }
}
