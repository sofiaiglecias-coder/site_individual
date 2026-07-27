// ==========================================
// PORTAL DE APOIO AO ESTUDANTE
// script.js
// ==========================================



// ==============================
// CARROSSEL DE IMAGENS
// ==============================


const imagens = [

    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200",

    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",

    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200",

    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200"

];


let indice = 0;

const slide = document.getElementById("slide");


if(slide){


    setInterval(()=>{


        indice++;


        if(indice >= imagens.length){

            indice = 0;

        }


        slide.src = imagens[indice];


    },4000);


}





// ==============================
// DARK MODE
// ==============================


const dark = document.getElementById("dark");


if(dark){


    dark.addEventListener("click",()=>{


        document.body.classList.toggle("dark");


        localStorage.setItem(

            "dark",

            document.body.classList.contains("dark")

        );


    });


}



if(localStorage.getItem("dark") === "true"){

    document.body.classList.add("dark");

}







// ==============================
// ALTO CONTRASTE
// ==============================


const contraste = document.getElementById("contraste");



if(contraste){


    contraste.addEventListener("click",()=>{


        document.body.classList.toggle("contraste");


        localStorage.setItem(

            "contraste",

            document.body.classList.contains("contraste")

        );


    });


}



if(localStorage.getItem("contraste") === "true"){

    document.body.classList.add("contraste");

}







// ==============================
// TAMANHO DA FONTE
// ==============================


let tamanho = Number(

    localStorage.getItem("fonte")

) || 16;



document.body.style.fontSize = tamanho + "px";



const aumentar = document.getElementById("fonteMais");

const diminuir = document.getElementById("fonteMenos");




if(aumentar){


    aumentar.addEventListener("click",()=>{


        if(tamanho < 30){


            tamanho += 2;


            document.body.style.fontSize =
            tamanho + "px";


            salvarFonte();


        }


    });


}




if(diminuir){


    diminuir.addEventListener("click",()=>{


        if(tamanho > 12){


            tamanho -= 2;


            document.body.style.fontSize =
            tamanho + "px";


            salvarFonte();


        }


    });


}





function salvarFonte(){


    localStorage.setItem(

        "fonte",

        tamanho

    );


}








// ==============================
// SAUDAÇÃO
// ==============================


const saudacao = document.getElementById("saudacao");


if(saudacao){


    let hora = new Date().getHours();


    let texto;


    if(hora < 12){

        texto = "Bom dia!";

    }

    else if(hora < 18){

        texto = "Boa tarde!";

    }

    else{

        texto = "Boa noite!";

    }


    saudacao.innerHTML = texto;


}







// ==============================
// DATA ATUAL
// ==============================


const data = document.getElementById("data");


if(data){


    data.innerHTML =

    "Data: " +

    new Date().toLocaleDateString("pt-BR");


}








// ==============================
// CONTADOR DE VISITAS
// ==============================


const contador = document.getElementById("contador");



let visitas =

Number(localStorage.getItem("visitas")) || 0;



visitas++;



localStorage.setItem(

    "visitas",

    visitas

);



if(contador){


    contador.innerHTML =

    "Visitas nesta página: " + visitas;


}







// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================


const topo = document.getElementById("topo");



window.addEventListener("scroll",()=>{


    if(!topo) return;


    if(window.scrollY > 300){


        topo.style.display="block";


    }

    else{


        topo.style.display="none";


    }


});





if(topo){


    topo.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}







// ==============================
// ANIMAÇÃO DOS CARDS
// ==============================


const cards = document.querySelectorAll(".card");



const observer = new IntersectionObserver((entradas)=>{


    entradas.forEach((entrada)=>{


        if(entrada.isIntersecting){


            entrada.target.classList.add("show");


        }


    });


});



cards.forEach((card)=>{


    observer.observe(card);


});









// ==============================
// PORTAL DE ESCUTA
// ==============================


const frases = [


    "Você é importante.",


    "Pedir ajuda demonstra coragem.",


    "Você merece respeito.",


    "Seus sentimentos importam.",


    "Sempre existe alguém disposto a ouvir."



];





const formulario = document.getElementById("formEscuta");





if(formulario){


    formulario.addEventListener("submit",(e)=>{


        e.preventDefault();



        const mensagem = document.getElementById("mensagem");

        const frase = document.getElementById("frase");



        formulario.reset();




        if(mensagem){


            mensagem.innerHTML =

            `Obrigado por compartilhar.

            <br><br>

            Você não está sozinho.

            <br><br>

            Procure professores, familiares ou pessoas de confiança quando precisar de apoio.`;


        }




        if(frase){


            let aleatoria =

            Math.floor(

                Math.random()*frases.length

            );



            frase.innerHTML = frases[aleatoria];


        }


    });


}









// ==============================
// QUIZ
// ==============================



const quiz = document.getElementById("quizForm");



if(quiz){


    quiz.addEventListener("submit",(e)=>{


        e.preventDefault();



        let pontos = 0;



        const respostas = {


            q1:"b",

            q2:"b",

            q3:"b",

            q4:"a",

            q5:"b"


        };



        for(let pergunta in respostas){



            const marcada = document.querySelector(

            `input[name="${pergunta}"]:checked`

            );



            if(marcada && marcada.value === respostas[pergunta]){


                pontos++;


            }


        }






        let texto;



        if(pontos === 5){


            texto =

            "Excelente! Você demonstrou muito conhecimento.";


        }

        else if(pontos >= 3){


            texto =

            "Muito bom! Continue aprendendo.";


        }

        else{


            texto =

            "Continue estudando. O conhecimento ajuda a melhorar o ambiente escolar.";


        }







        const resultado = document.getElementById("resultado");



        if(resultado){


            resultado.innerHTML =


            "<h2>Resultado</h2>" +


            "<h3>Acertos: " +

            pontos +

            " / 5</h3>" +


            "<p>" +

            texto +

            "</p>";



        }


    });


}







// ==============================
// REINICIAR QUIZ
// ==============================


const reiniciar = document.getElementById("reiniciar");



if(reiniciar){


    reiniciar.addEventListener("click",()=>{


        if(quiz){


            quiz.reset();


        }



        const resultado =

        document.getElementById("resultado");



        if(resultado){


            resultado.innerHTML="";


        }


    });


}