let criancas = [];
let graficoImc = null;
let editando = -1;

function esconderTelas() {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("cadastro").style.display = "none";
    document.getElementById("cardapio").style.display = "none";
    document.getElementById("relatorios").style.display = "none";
}

function mostrarDashboard() {
    esconderTelas();
    document.getElementById("dashboard").style.display = "block";
}

function mostrarCadastro() {
    esconderTelas();
    document.getElementById("cadastro").style.display = "block";
}

function mostrarCardapio() {
    esconderTelas();
    document.getElementById("cardapio").style.display = "block";
    atualizarCardapio();
}

function mostrarRelatorios() {
    esconderTelas();
    document.getElementById("relatorios").style.display = "block";
    atualizarRelatorios();
}

function cadastrarCrianca() {
    let nome = document.getElementById("nome").value;
    let responsavel = document.getElementById("responsavel").value;
    let classe = document.getElementById("classe").value;
    let idade = parseInt(document.getElementById("idade").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if (!nome || !responsavel || !classe || !idade || !altura || !peso) {
        mostrarNotificacao("Preencha todos os campos!", "erro");
        return;
    }

    let imc = peso / (altura * altura);
    let situacao = "";
    let alimentacao = "";
    let atividades = "";

    if (imc < 18.5) {

        situacao = "Abaixo do peso";

    } else if (imc < 25) {

        situacao = "Peso normal";

    } else {

        situacao = "Acima do peso";
    }

    if (imc < 18.5) {

    atividades = `
        <div class="atividade-box">

            <h3>🏃 Exercícios para Ganho Saudável</h3>

            <p class="atividade-texto">
                Objetivo: estimular crescimento, coordenação motora,
                fortalecimento muscular leve e aumento saudável do apetite.
            </p>

            <div class="atividade-grid">

                <div class="atividade-item">
                    ⚽ Futebol recreativo
                </div>

                <div class="atividade-item">
                    🚴 Bicicleta
                </div>

                <div class="atividade-item">
                    🤸 Circuito infantil
                </div>

                <div class="atividade-item">
                    🏊 Natação
                </div>

                <div class="atividade-item">
                    🕺 Dança
                </div>

                <div class="atividade-item">
                    🪁 Brincadeiras ao ar livre
                </div>

            </div>

            <div class="tempo-atividade">
                ⏱️ Recomendação: 40 a 60 minutos por dia
            </div>

        </div>
    `;

} else if (imc < 25) {

    atividades = `
        <div class="atividade-box">

            <h3>💪 Exercícios para Manutenção Saudável</h3>

            <p class="atividade-texto">
                Objetivo: manter condicionamento físico,
                coordenação motora e rotina ativa.
            </p>

            <div class="atividade-grid">

                <div class="atividade-item">
                    ⚽ Futebol
                </div>

                <div class="atividade-item">
                    🏀 Basquete
                </div>

                <div class="atividade-item">
                    🏐 Vôlei
                </div>

                <div class="atividade-item">
                    🕺 Dança
                </div>

                <div class="atividade-item">
                    🚶 Caminhada
                </div>

                <div class="atividade-item">
                    🧘 Alongamento
                </div>

            </div>

            <div class="tempo-atividade">
                ⏱️ Recomendação: mínimo de 1 hora diária
            </div>

        </div>
    `;