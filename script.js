// ==========================================
// PORTAL DE APOIO AO ESTUDANTE
// script.js
// ==========================================

// -----------------------------
// CARROSSEL
// -----------------------------

const imagens = [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200"
];

let indice = 0;
const slide = document.getElementById("slide");

if (slide) {

    setInterval(() => {

        indice++;

        if (indice >= imagens.length) {
            indice = 0;
        }

        slide.src = imagens[indice];

    }, 4000);

}

// -----------------------------
// DARK MODE
// -----------------------------

const dark = document.getElementById("dark");

if (dark) {

    dark.addEventListener("click", () => {

        document.body.classList.toggle("dark");

    });

}

// -----------------------------
// ALTO CONTRASTE
// -----------------------------

const contraste = document.getElementById("contraste");

if (contraste) {

    contraste.addEventListener("click", () => {

        document.body.classList.toggle("contraste");

    });

}

// -----------------------------
// AUMENTAR E DIMINUIR FONTE
// -----------------------------

let tamanho = 16;

const aumentar = document.getElementById("fonteMais");
const diminuir = document.getElementById("fonteMenos");

if (aumentar) {

    aumentar.addEventListener("click", () => {

        tamanho += 2;

        document.body.style.fontSize = tamanho + "px";

    });

}

if (diminuir) {

    diminuir.addEventListener("click", () => {

        if (tamanho > 12) {

            tamanho -= 2;

            document.body.style.fontSize = tamanho + "px";

        }

    });

}

// -----------------------------
// BOTÃO VOLTAR AO TOPO
// -----------------------------

const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (!topo) return;

    if (window.scrollY > 300) {

        topo.style.display = "block";

    } else {

        topo.style.display = "none";

    }

});

if (topo) {

    topo.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

// -----------------------------
// ANIMAÇÃO DOS CARDS
// -----------------------------

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("show");

        }

    });

});

cards.forEach((card) => {

    observer.observe(card);

});

// -----------------------------
// PORTAL DE ESCUTA
// -----------------------------

const frases = [

    "Você é importante.",

    "Todo problema pode ser enfrentado com apoio.",

    "Pedir ajuda é um ato de coragem.",

    "Você merece respeito.",

    "Incentive sempre o diálogo."

];

const formulario = document.getElementById("formEscuta");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        e.preventDefault();

        formulario.reset();

        const mensagem = document.getElementById("mensagem");

        const frase = document.getElementById("frase");

        if (mensagem) {

            mensagem.innerHTML =
                "Obrigado por compartilhar seus sentimentos.<br><br>" +
                "Você não está sozinho.<br><br>" +
                "Procure um professor, pedagogo, direção da escola, familiares ou outro adulto de confiança sempre que precisar de ajuda.";

        }

        if (frase) {

            let aleatoria = Math.floor(Math.random() * frases.length);

            frase.innerHTML = frases[aleatoria];

        }

    });

}

// -----------------------------
// QUIZ
// -----------------------------

const quiz = document.getElementById("quizForm");

if (quiz) {

    quiz.addEventListener("submit", function (e) {

        e.preventDefault();

        let pontos = 0;

        const respostas = {

            q1: "b",
            q2: "b",
            q3: "b",
            q4: "a",
            q5: "b"

        };

        for (let pergunta in respostas) {

            const marcada = document.querySelector(
                `input[name="${pergunta}"]:checked`
            );

            if (marcada && marcada.value === respostas[pergunta]) {

                pontos++;

            }

        }

        let texto = "";

        if (pontos === 5) {

            texto = "Parabéns! Você demonstrou muito conhecimento.";

        } else if (pontos >= 3) {

            texto = "Bom trabalho! Continue aprendendo.";

        } else {

            texto = "Continue estudando. Informação ajuda a construir um ambiente melhor.";

        }

        const resultado = document.getElementById("resultado");

        if (resultado) {

            resultado.innerHTML =

                "<h2>Resultado</h2>" +

                "<h3>Acertos: " + pontos + " / 5</h3>" +

                "<p>" + texto + "</p>";

        }

    });

}

// -----------------------------
// BOTÃO TENTAR NOVAMENTE
// -----------------------------

const reiniciar = document.getElementById("reiniciar");

if (reiniciar) {

    reiniciar.addEventListener("click", () => {

        if (quiz) {

            quiz.reset();

        }

        const resultado = document.getElementById("resultado");

        if (resultado) {

            resultado.innerHTML = "";

        }

    });

}