// =========================
// BOTÃO DE PROJETOS
// =========================

const botaoProjetos = document.querySelector('a[href="#projetos"]');

botaoProjetos.addEventListener("click", function () {
    console.log("Usuário acessou a seção de projetos!");
});


// =========================
// MENSAGEM NO CONSOLE
// =========================

console.log("Portfólio carregado com sucesso!");


// =========================
// ANO AUTOMÁTICO DO RODAPÉ
// =========================

const anoAtual = new Date().getFullYear();

const rodape = document.querySelector("footer p");

rodape.innerHTML = `&copy; ${anoAtual} Gustavo Ferrari. Todos os direitos reservados.`;