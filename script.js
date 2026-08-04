/* ==========================================================
   PORTAL SAÚDE EMOCIONAL
   EDIÇÃO SIMBIONTE / VENOM
========================================================== */



/* ==========================================================
   SAUDAÇÃO DINÂMICA
========================================================== */


const greeting =
document.getElementById("greeting");



const hour =
new Date().getHours();



if(hour < 12){

    greeting.textContent =
    "☀️ Bom dia! Cuide da sua mente.";

}

else if(hour < 18){

    greeting.textContent =
    "🌤 Boa tarde! Você está evoluindo.";

}

else{

    greeting.textContent =
    "🌙 Boa noite! Descanse e se cuide.";

}





/* ==========================================================
   CARROSSEL AUTOMÁTICO
========================================================== */


const slides =
document.querySelectorAll(".slide");


let currentSlide = 0;



function changeSlide(){


    if(slides.length === 0)
        return;



    slides[currentSlide]
    .classList
    .remove("active");



    currentSlide++;



    if(currentSlide >= slides.length){

        currentSlide = 0;

    }



    slides[currentSlide]
    .classList
    .add("active");


}



setInterval(changeSlide,4000);







/* ==========================================================
   PARTÍCULAS SIMBIONTE
========================================================== */


const particles =
document.getElementById("particles");



if(particles){


for(let i=0;i<100;i++){


    const particle =
    document.createElement("div");


    particle.className =
    "particle";



    particle.style.left =
    Math.random()*100+"%";



    particle.style.animationDelay =
    Math.random()*10+"s";



    particle.style.animationDuration =
    (5+Math.random()*10)+"s";



    particle.style.background =
    Math.random()>0.5
    ?
    "#ff0000"
    :
    "#ffffff";



    particles.appendChild(particle);



}


}







/* ==========================================================
   TAMANHO DA FONTE
========================================================== */


let fontSize = 100;



const increaseFont =
document.getElementById("increaseFont");

const decreaseFont =
document.getElementById("decreaseFont");



if(increaseFont){


increaseFont.onclick = ()=>{


if(fontSize < 160){


fontSize +=10;


document.body.style.fontSize =
fontSize+"%";


}


};



}



if(decreaseFont){


decreaseFont.onclick = ()=>{


if(fontSize >80){


fontSize -=10;


document.body.style.fontSize =
fontSize+"%";


}


};



}







/* ==========================================================
   MODOS VISUAIS
========================================================== */


const darkMode =
document.getElementById("darkMode");



if(darkMode){


darkMode.onclick = ()=>{


document.body
.classList
.toggle("dark");


};


}





const contrastMode =
document.getElementById("contrastMode");



if(contrastMode){


contrastMode.onclick = ()=>{


document.body
.classList
.toggle("high-contrast");


};


}






/* ==========================================================
   SCROLL REVEAL
========================================================== */


const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target
.classList
.add("active");


}


});


},{
threshold:.2

});





document
.querySelectorAll(".reveal")
.forEach(item=>{


observer.observe(item);


});
/* ==========================================================
   BOTÃO VOLTAR AO TOPO
========================================================== */


const backToTop =
document.getElementById("backToTop");



if(backToTop){


window.addEventListener("scroll",()=>{


if(window.scrollY > 400){


backToTop.style.display="block";


}

else{


backToTop.style.display="none";


}


});




backToTop.onclick = ()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};


}






/* ==========================================================
   SELETOR DE HUMOR
========================================================== */


let selectedMood = "";



const moods =
document.querySelectorAll(".mood");



moods.forEach(button=>{


button.addEventListener("click",()=>{


moods.forEach(btn=>{


btn.classList.remove("selected");


});



button.classList.add("selected");



selectedMood =
button.dataset.mood;



});



});







/* ==========================================================
   FRASES DO SIMBIONTE
========================================================== */


const motivationalPhrases = [


"🖤 Você é mais forte do que pensa.",


"🕷️ Até os heróis precisam pedir ajuda.",


"🔥 Cada pequeno avanço é uma vitória.",


"❤️ Seus sentimentos importam.",


"🌙 Amanhã é uma nova oportunidade.",


"🕸️ Você não precisa enfrentar tudo sozinho."



];







/* ==========================================================
   FORMULÁRIO DE APOIO
========================================================== */


const supportForm =
document.getElementById("supportForm");




if(supportForm){



supportForm.addEventListener(
"submit",
(event)=>{


event.preventDefault();



const message =
document.getElementById("message")
.value
.trim();



const response =
document.getElementById("supportResponse");





if(selectedMood===""){



response.innerHTML =
`

<p style="color:red">

Escolha um sentimento primeiro.

</p>

`;

return;


}




if(message===""){



response.innerHTML =
`

<p style="color:red">

Escreva uma mensagem.

</p>

`;

return;


}






const phrase =

motivationalPhrases[

Math.floor(

Math.random()

*

motivationalPhrases.length

)

];







response.innerHTML =

`

<div class="support-card">


<h3>

🕷️ Mensagem recebida

</h3>


<p>

Obrigado por compartilhar.

</p>


<p>

Seu humor:

<strong>

${selectedMood}

</strong>


</p>


<p>

"${message}"

</p>



<hr>



<p>

<strong>

${phrase}

</strong>

</p>



</div>

`;





supportForm.reset();



moods.forEach(btn=>{


btn.classList.remove("selected");


});



selectedMood="";



}


);



}









/* ==========================================================
   MOMENTO DE CALMA
========================================================== */


const calmButton =
document.getElementById("calmButton");



const calmBox =
document.getElementById("calmBox");



if(calmButton){



calmButton.onclick=()=>{


calmBox
.classList
.toggle("active");


};



}








/* ==========================================================
   ASSISTENTE ARANHA-APOIO
========================================================== */


function assistantReply(){



const answers = [



"🕷️ Estou aqui com você. Como posso ajudar?",


"🖤 Respire fundo. Você está fazendo progresso.",


"❤️ Falar sobre sentimentos é uma atitude corajosa.",


"🌱 Pequenas mudanças criam grandes resultados.",


"🕸️ Até o Homem-Aranha precisou de apoio algumas vezes."



];



const text =

answers[

Math.floor(

Math.random()

*

answers.length

)

];




const box =
document.getElementById("assistantText");



if(box){


box.innerHTML=text;


}



}



window.assistantReply =
assistantReply;








/* ==========================================================
   EFEITO 3D NOS CARDS
========================================================== */


document
.querySelectorAll(".card")
.forEach(card=>{


card.addEventListener(
"mousemove",
(e)=>{



const rect =
card.getBoundingClientRect();



const x =
e.clientX -
rect.left;



const y =
e.clientY -
rect.top;



const rotateY =
(x / rect.width - .5)
*
20;



const rotateX =
(y / rect.height - .5)
*
-20;





card.style.transform =

`

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-10px)

`;



});






card.addEventListener(
"mouseleave",
()=>{


card.style.transform="";


});


});
/* ==========================================================
   QUIZ COM PONTUAÇÃO E NÍVEL
========================================================== */


const answers = {


q1:"b",

q2:"a",

q3:"a",

q4:"a",

q5:"a"


};



const comments = {


q1:
"A saúde emocional influencia diretamente o aprendizado e a convivência.",


q2:
"Conversar ajuda a diminuir preocupações e encontrar apoio.",


q3:
"Um bom sono melhora memória, atenção e equilíbrio emocional.",


q4:
"Pedir ajuda demonstra coragem e maturidade.",


q5:
"A empatia melhora os relacionamentos e reduz conflitos."



};





const showResult =
document.getElementById("showResult");




if(showResult){



showResult.onclick=()=>{


let score=0;


let explanation=
"<h3>🕷️ Gabarito Comentado</h3>";





for(let question in answers){



const selected =

document.querySelector(

`input[name="${question}"]:checked`

);




if(selected){



if(selected.value === answers[question]){


score++;


selected.parentElement.style.color=
"lime";


}

else{


selected.parentElement.style.color=
"red";


}



}





explanation +=


`

<p>

<strong>

${question.toUpperCase()}

</strong>


<br>

✔ Resposta correta:

<strong>

${answers[question].toUpperCase()}

</strong>


</p>


<p>

${comments[question]}

</p>


<hr>


`;



}





let level = "";



if(score===5){


level =
"🕷️ Nível Herói da Mente";


}

else if(score>=3){


level =
"🔥 Nível Aprendiz do Controle";


}

else{


level =
"🖤 Nível Iniciante Simbionte";


}







document
.getElementById("quizResult")
.innerHTML =


`

<h2>

Você acertou ${score}/5

</h2>


<h3>

${level}

</h3>


`;






document
.getElementById("answerKey")
.innerHTML =
explanation;




};



}









/* ==========================================================
   DATA ATUAL
========================================================== */


const today =
new Date();



const year =
document.getElementById("year");



const currentDate =
document.getElementById("currentDate");




if(year){


year.textContent =
today.getFullYear();


}



if(currentDate){


currentDate.textContent =

today.toLocaleDateString(
"pt-BR"
);


}









/* ==========================================================
   CONTADOR DE VISITAS
========================================================== */


let visits =

localStorage.getItem(
"portalVisits"
);



if(visits===null){


visits=1;


}

else{


visits =
Number(visits)+1;


}



localStorage.setItem(

"portalVisits",

visits

);





const visitCounter =
document.getElementById("visitCounter");



if(visitCounter){


visitCounter.textContent =
visits;


}










/* ==========================================================
   MENU DE CONFIGURAÇÕES
========================================================== */


const settingsButton =
document.getElementById("settingsButton");



const accessibilityPanel =
document.getElementById("accessibilityPanel");




if(settingsButton){



settingsButton.onclick=()=>{


accessibilityPanel
.classList
.toggle("active");


};



}









/* ==========================================================
   FEEDBACK NAS RESPOSTAS DO QUIZ
========================================================== */


document
.querySelectorAll(
"input[type='radio']"
)
.forEach(option=>{


option.addEventListener(
"change",
()=>{


const group =

document.querySelectorAll(

`input[name="${option.name}"]`

);



group.forEach(item=>{


item.parentElement.style.fontWeight=
"normal";


item.parentElement.style.background=
"transparent";


});






option.parentElement.style.fontWeight=
"bold";



option.parentElement.style.background=
"rgba(255,0,0,.15)";



option.parentElement.style.padding=
"10px";


option.parentElement.style.borderRadius=
"10px";



});


});









/* ==========================================================
   SOM DE INTERAÇÃO
========================================================== */


const clickSound =

new Audio(

"https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"

);





document
.querySelectorAll("button")
.forEach(button=>{


button.addEventListener(
"click",
()=>{


clickSound.currentTime=0;


clickSound.play()
.catch(()=>{});


});


});









/* ==========================================================
   EFEITO DE ENERGIA SIMBIONTE NO MOUSE
========================================================== */


document.addEventListener(
"mousemove",
(e)=>{


const glow =
document.createElement("span");



glow.className=
"mouse-glow";



glow.style.left =
e.pageX+"px";


glow.style.top =
e.pageY+"px";



document.body.appendChild(glow);




setTimeout(()=>{


glow.remove();


},600);



});









/* ==========================================================
   FINALIZAÇÃO
========================================================== */


console.log(

"🕷️ Portal Saúde Emocional carregado com energia simbionte."

);