/* =========================================================
 Este arquivo controla as interações do site.
========================================================= */


/* =========================================================
   FORMULÁRIO DE CADASTRO
========================================================= */

/*
    Procuramos pelo formulário através do ID:
    "formCadastro"
*/

const formCadastro = document.getElementById("formCadastro");


/*
    Verificamos se o formulário existe.

    Isso é importante porque o script é carregado
    em todas as páginas.
*/

if (formCadastro) {


    /*
        Detecta quando o usuário clica
        no botão "Criar conta".
    */

    formCadastro.addEventListener("submit", function(event) {


        /*
            Impede o formulário de recarregar
            a página.
        */

        event.preventDefault();


        /*
            Mostra uma mensagem.

            IMPORTANTE:
            O site não possui banco de dados.
            Portanto, o cadastro é apenas visual.
        */

        alert(
            "Cadastro demonstrativo!\n\n" +
            "Esta página ainda não possui um sistema " +
            "real de cadastro ou banco de dados."
        );

    });

}


/* =========================================================
   FORMULÁRIO DE LOGIN
========================================================= */


/*
    Procura o formulário de login.
*/

const formLogin = document.getElementById("formLogin");


/*
    Verifica se o formulário existe.
*/

if (formLogin) {


    /*
        Detecta o envio do formulário.
    */

    formLogin.addEventListener("submit", function(event) {


        /*
            Impede o recarregamento da página.
        */

        event.preventDefault();


        /*
            Mostra uma mensagem informando
            que o login é apenas demonstrativo.
        */

        alert(
            "Login demonstrativo!\n\n" +
            "O sistema de autenticação ainda não " +
            "está conectado a um banco de dados."
        );

    });

}


/* =========================================================
   ANIMAÇÃO DOS CARDS
========================================================= */


/*
    Seleciona todos os elementos
    que possuem a classe feature-card.
*/

const cards = document.querySelectorAll(".feature-card");


/*
    Percorre todos os cards encontrados.
*/

cards.forEach(function(card, index) {


    /*
        Começa deixando o card transparente.
    */

    card.style.opacity = "0";


    /*
        Coloca o card um pouco para baixo.
    */

    card.style.transform = "translateY(30px)";


    /*
        Pequeno atraso para cada card.

        O index faz cada card aparecer
        um pouco depois do anterior.
    */

    setTimeout(function() {


        /*
            Define a velocidade da animação.
        */

        card.style.transition = "0.7s";


        /*
            Torna o card visível.
        */

        card.style.opacity = "1";


        /*
            Retorna o card para sua posição original.
        */

        card.style.transform = "translateY(0)";


    }, 200 + (index * 150));

});


/* =========================================================
   MENSAGEM NO CONSOLE
========================================================= */


/*
    Esta mensagem aparece no console do navegador.

    Serve apenas para demonstrar que o JavaScript
    foi carregado corretamente.
*/

console.log(
    "Digital Gosht Software - JavaScript carregado com sucesso!"
);