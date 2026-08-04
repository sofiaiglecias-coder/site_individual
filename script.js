# `script.js`

```javascript
/* ==========================================================
   PORTAL DE SAÚDE EMOCIONAL
   Todas as funções estão comentadas para facilitar o estudo.
========================================================== */

/* ==========================================================
   SAUDAÇÃO DINÂMICA
   Exibe Bom dia, Boa tarde ou Boa noite.
========================================================== */

const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "☀️ Bom dia! Seja bem-vindo(a).";
} else if (hour < 18) {
    greeting.textContent = "🌤 Boa tarde! Esperamos que seu dia esteja ótimo.";
} else {
    greeting.textContent = "🌙 Boa noite! Cuide de você.";
}

/* ==========================================================
   CARROSSEL AUTOMÁTICO
========================================================== */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function changeSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}

setInterval(changeSlide, 4000);

/* ==========================================================
   AUMENTAR E DIMINUIR FONTE
========================================================== */

let fontSize = 100;

document
    .getElementById("increaseFont")
    .addEventListener("click", () => {

        if (fontSize < 150) {

            fontSize += 10;

            document.body.style.fontSize = fontSize + "%";
        }

    });

document
    .getElementById("decreaseFont")
    .addEventListener("click", () => {

        if (fontSize > 80) {

            fontSize -= 10;

            document.body.style.fontSize = fontSize + "%";
        }

    });

/* ==========================================================
   DARK MODE
========================================================== */

document
    .getElementById("darkMode")
    .addEventListener("click", () => {

        document.body.classList.toggle("dark");

    });

/* ==========================================================
   ALTO CONTRASTE
========================================================== */

document
    .getElementById("contrastMode")
    .addEventListener("click", () => {

        document.body.classList.toggle("high-contrast");

    });

/* ==========================================================
   SCROLL REVEAL
   Exibe animações conforme a página é rolada.
========================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".reveal").forEach((item) => {

    observer.observe(item);

});

/* ==========================================================
   BOTÃO VOLTAR AO TOPO
========================================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================================
   SELETOR DE HUMOR
========================================================== */

let selectedMood = "";

const moods = document.querySelectorAll(".mood");

moods.forEach(button => {

    button.addEventListener("click", () => {

        moods.forEach(btn => btn.classList.remove("selected"));

        button.classList.add("selected");

        selectedMood = button.dataset.mood;

    });

});

/* ==========================================================
   FRASES MOTIVACIONAIS
========================================================== */

const motivationalPhrases = [

    "Você é mais forte do que imagina. 💙",

    "Cada pequeno passo é uma conquista. 🌻",

    "Pedir ajuda é um ato de coragem. 🤝",

    "Você merece respeito e acolhimento. 💛",

    "Dias difíceis passam. Continue acreditando em você. ✨",

    "Sua saúde emocional é importante. 🌈",

    "Nunca desista de cuidar de si mesmo. ❤️"

];

/* ==========================================================
   FORMULÁRIO DE APOIO
========================================================== */

const supportForm = document.getElementById("supportForm");

supportForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const message = document
        .getElementById("message")
        .value
        .trim();

    const response = document.getElementById("supportResponse");

    if (selectedMood === "") {

        response.innerHTML =
            "<p style='color:red;'>Selecione um emoji antes de enviar.</p>";

        return;

    }

    if (message === "") {

        response.innerHTML =
            "<p style='color:red;'>Escreva uma mensagem.</p>";

        return;

    }

    const randomPhrase =
        motivationalPhrases[
            Math.floor(Math.random() * motivationalPhrases.length)
        ];

    response.innerHTML = `

        <div style="margin-top:25px;
                    background:#E8F5E9;
                    padding:20px;
                    border-radius:10px;">

            <h3>💚 Mensagem de acolhimento</h3>

            <p>

                Obrigado por compartilhar como você está se sentindo.

            </p>

            <p>

                Humor selecionado:
                <strong>${selectedMood}</strong>

            </p>

            <p>

                "${message}"

            </p>

            <hr>

            <p>

                <strong>${randomPhrase}</strong>

            </p>

        </div>

    `;

    supportForm.reset();

    moods.forEach(btn => btn.classList.remove("selected"));

    selectedMood = "";

});

/* ==========================================================
   QUIZ
========================================================== */

const answers = {

    q1: "b",
    q2: "a",
    q3: "a",
    q4: "a",
    q5: "a"

};

const comments = {

    q1:
        "A saúde emocional influencia diretamente a concentração, a aprendizagem e a convivência escolar.",

    q2:
        "Conversar sobre sentimentos ajuda a aliviar a ansiedade e permite receber apoio.",

    q3:
        "Dormir bem melhora memória, atenção e equilíbrio emocional.",

    q4:
        "Pedir ajuda demonstra coragem e maturidade emocional.",

    q5:
        "A empatia fortalece o respeito e reduz conflitos na escola."

};

document
    .getElementById("showResult")
    .addEventListener("click", () => {

        let score = 0;

        let explanation = "<h3>Gabarito Comentado</h3>";

        for (let question in answers) {

            const selected =
                document.querySelector(
                    `input[name="${question}"]:checked`
                );

            if (selected) {

                if (selected.value === answers[question]) {

                    score++;

                    selected.parentElement.style.color = "green";

                } else {

                    selected.parentElement.style.color = "red";

                }

            }

            explanation += `

                <p>

                    <strong>${question.toUpperCase()}</strong>

                    ✔ Resposta correta:
                    <strong>${answers[question].toUpperCase()}</strong>

                </p>

                <p>

                    ${comments[question]}

                </p>

                <hr>

            `;

        }

        document.getElementById("quizResult").innerHTML =

            `<h2>Você acertou ${score} de 5 perguntas.</h2>`;

        document.getElementById("answerKey").innerHTML = explanation;

    });

/* ==========================================================
   DATA ATUAL
========================================================== */

const today = new Date();

document.getElementById("year").textContent = today.getFullYear();

document.getElementById("currentDate").textContent =
    today.toLocaleDateString("pt-BR");

/* ==========================================================
   CONTADOR DE VISITAS
========================================================== */

let visits = localStorage.getItem("portalVisits");

if (visits === null) {

    visits = 1;

} else {

    visits = Number(visits) + 1;

}

localStorage.setItem("portalVisits", visits);

document.getElementById("visitCounter").textContent = visits;

/* ==========================================================
   FEEDBACK VISUAL DAS ALTERNATIVAS
========================================================== */

document.querySelectorAll("input[type='radio']").forEach(option => {

    option.addEventListener("change", () => {

        const group =
            document.querySelectorAll(
                `input[name="${option.name}"]`
            );

        group.forEach(item => {

            item.parentElement.style.fontWeight = "normal";

            item.parentElement.style.background = "transparent";

        });

        option.parentElement.style.fontWeight = "bold";

        option.parentElement.style.background = "#E3F2FD";

        option.parentElement.style.padding = "8px";

        option.parentElement.style.borderRadius = "8px";

    });

});

/* ==========================================================
   FIM DO SCRIPT
========================================================== */
```
