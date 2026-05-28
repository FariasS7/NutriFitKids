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
    } else {

    atividades = `
        <div class="atividade-box">

            <h3>🔥 Exercícios para Controle de Peso</h3>

            <p class="atividade-texto">
                Objetivo: aumentar gasto calórico,
                melhorar condicionamento e estimular hábitos saudáveis.
            </p>

            <div class="atividade-grid">

                <div class="atividade-item">
                    🏃 Corrida leve
                </div>

                <div class="atividade-item">
                    🚴 Bicicleta
                </div>

                <div class="atividade-item">
                    🏊 Natação
                </div>

                <div class="atividade-item">
                    ⚽ Futebol
                </div>

                <div class="atividade-item">
                    🕺 Dança aeróbica
                </div>

                <div class="atividade-item">
                    🥾 Caminhada
                </div>

            </div>

            <div class="tempo-atividade">
                ⏱️ Recomendação: 60 minutos diários
            </div>

        </div>
    `;
}
   

    let novaCrianca = {
    nome,
    responsavel,
    classe,
    idade,
    altura,
    peso,
    imc: imc.toFixed(2),
    situacao,
    alimentacao,
    atividades
};

if (editando >= 0) {

    criancas[editando] = novaCrianca;

    editando = -1;

} else {

    criancas.push(novaCrianca);
}
    atualizarTela();
    salvarDados();
    mostrarNotificacao("Criança cadastrada com sucesso!");
    limparCampos();
}


function atualizarTela() {
    let lista = document.getElementById("listaCriancas");
    lista.innerHTML = "";

    let somaImc = 0;

    criancas.forEach((crianca, indice) => {
        somaImc += parseFloat(crianca.imc);

        lista.innerHTML += `
            <div class="card">
                <h2>${crianca.nome}</h2>
                <p><strong>Idade:</strong> ${crianca.idade}</p>
                <p><strong>Responsável:</strong> ${crianca.responsavel}</p>
                <p><strong>Classe/Sala:</strong> ${crianca.classe}</p>
                <p><strong>Altura:</strong> ${crianca.altura}m</p>
                <p><strong>Peso:</strong> ${crianca.peso}kg</p>
                <p><strong>IMC:</strong> ${crianca.imc}</p>
                <p><strong>Situação:</strong> ${crianca.situacao}</p>
                <p><strong>Alimentação:</strong> ${crianca.alimentacao}</p>

                <div class="atividades">
                    ${crianca.atividades}
                </div>

                <button onclick="editarCrianca(${indice})">
                    Editar
                </button>

                <button class="btn-remover" onclick="removerCrianca(${indice})">
                    Remover
                </button>
                <button onclick="imprimirCrianca(${indice})">
                    🖨️ Imprimir
                </button>
            </div>
        `;
    });

    document.getElementById("totalCriancas").innerText = criancas.length;

    if (criancas.length > 0) {
        let media = somaImc / criancas.length;
        document.getElementById("mediaImc").innerText = media.toFixed(1);
    } else {
        document.getElementById("mediaImc").innerText = "0";
    }

    atualizarGrafico();
}

function removerCrianca(indice) {
    criancas.splice(indice, 1);
    atualizarTela();
    atualizarCardapio();
    atualizarRelatorios();
}

function atualizarGrafico() {

    let nomes = criancas.map(crianca => crianca.nome);

    let imcs = criancas.map(crianca => parseFloat(crianca.imc));

    let canvas = document.getElementById("graficoImc");

    if (!canvas || typeof Chart === "undefined") {
        return;
    }

    if (graficoImc !== null) {
        graficoImc.destroy();
    }

    graficoImc = new Chart(canvas, {

        type: "bar",

        data: {

            labels: nomes,

            datasets: [{

                label: "IMC",

                data: imcs,

                backgroundColor: [

                    "#8B5CF6",
                    "#6366F1",
                    "#EC4899",
                    "#10B981",
                    "#F59E0B",
                    "#EF4444"

                ],

                borderRadius: 18,

                borderSkipped: false,

                barThickness: 32
            }]
        },
        options: {

            responsive: true,

            maintainAspectRatio: false,

            animation: {
                duration: 1400
            },

            plugins: {

                legend: {
                    display: false
                },

                tooltip: {

                    backgroundColor: "#111827",

                    padding: 14,

                    titleFont: {
                        size: 16
                    },

                    bodyFont: {
                        size: 14
                    }
                }
            },

            scales: {

                x: {

                    grid: {
                        display: false
                    },

                    ticks: {
                        color: "#6B7280",
                        font: {
                            size: 14
                        }
                    }
                },

                y: {

                    beginAtZero: true,

                    grid: {
                        color: "rgba(0,0,0,0.05)"
                    },

                    ticks: {
                        color: "#6B7280",
                        font: {
                            size: 13
                        }
                    }
                }
            }
        }
    });
}


function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("responsavel").value = "";
    document.getElementById("classe").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").value = "";
}



function atualizarCardapio() {
    let area = document.getElementById("cardapioConteudo");

    if (!area) return;

    area.innerHTML = "";

    if (criancas.length === 0) {
        area.innerHTML = "<p>Nenhuma criança cadastrada ainda.</p>";
        return;
    }

    criancas.forEach(crianca => {
        area.innerHTML += `
            <div class="card card-grande">
                <h2>${crianca.nome}</h2>
                <p><strong>Idade:</strong> ${crianca.idade} anos</p>
                <p><strong>IMC:</strong> ${crianca.imc}</p>
                <p><strong>Situação:</strong> ${crianca.situacao}</p>
                ${gerarCardapio(crianca)}
            </div>
        `;
    });
}

function atualizarRelatorios() {
    let abaixo = 0;
    let normal = 0;
    let acima = 0;

    criancas.forEach(crianca => {
        if (crianca.situacao === "Abaixo do peso") {
            abaixo++;
        } else if (crianca.situacao === "Peso normal") {
            normal++;
        } else {
            acima++;
        }
    });

    document.getElementById("relatorioTotal").innerText = criancas.length;
    document.getElementById("relatorioAbaixo").innerText = abaixo;
    document.getElementById("relatorioNormal").innerText = normal;
    document.getElementById("relatorioAcima").innerText = acima;
}
function mostrarConfiguracoes() {

    esconderTelas();

    document.getElementById("configuracoes").style.display = "block";
}


// DARK MODE

function ativarDarkMode() {

    document.body.classList.toggle("dark");
}


// RESETAR SISTEMA

function resetarSistema() {

    let confirmar = confirm("Deseja apagar todos os dados?");

    if (confirmar) {

        criancas = [];

        atualizarTela();

        atualizarCardapio();

        atualizarRelatorios();

        mostrarNotificacao("Sistema resetado!", "aviso");
    }
}
function editarCrianca(indice) {

    let crianca = criancas[indice];

    document.getElementById("nome").value = crianca.nome;

    document.getElementById("idade").value = crianca.idade;

    document.getElementById("classe").value = crianca.classe;

    document.getElementById("altura").value = crianca.altura;

    document.getElementById("peso").value = crianca.peso;

    editando = indice;

    mostrarCadastro();
}
function gerarCardapio(crianca) {
    let idade = crianca.idade;
    let situacao = crianca.situacao;

    let titulo = "";
    let objetivo = "";
    let cafe = "";
    let lancheManha = "";
    let almoco = "";
    let lancheTarde = "";
    let jantar = "";
    let ceia = "";
    let evitar = "";
    let hidratacao = "";
    let observacao = "";

    if (situacao === "Abaixo do peso" && idade <= 10) {
        titulo = "Cardápio infantil para ganho saudável de peso";
        objetivo = "Aumentar energia e nutrientes sem usar alimentos ultraprocessados.";

        cafe = `
            <li>Leite integral ou iogurte natural</li>
            <li>Pão com queijo branco ou ovo mexido</li>
            <li>Banana com aveia ou mamão</li>
            <li>Vitamina de fruta com leite</li>
        `;
        lancheManha = `
            <li>Fruta com aveia</li>
            <li>Iogurte natural</li>
            <li>Sanduíche pequeno com queijo</li>
        `;

        almoco = `
            <li>Arroz e feijão</li>
            <li>Frango desfiado, carne moída ou ovo</li>
            <li>Legumes cozidos</li>
            <li>Salada leve</li>
            <li>Fruta de sobremesa</li>
        `;

        lancheTarde = `
            <li>Vitamina de banana com aveia</li>
            <li>Pão com queijo ou pasta de amendoim</li>
            <li>Bolo caseiro simples</li>
        `;

        jantar = `
            <li>Sopa de legumes com carne ou frango</li>
            <li>Arroz, feijão e ovo em menor quantidade</li>
            <li>Purê de batata com frango</li>
        `;

        ceia = `
            <li>Leite morno</li>
            <li>Iogurte natural</li>
            <li>Fruta leve</li>
        `;

        evitar = `
            <li>Refrigerantes</li>
            <li>Salgadinhos industrializados</li>
            <li>Doces em excesso</li>
        `;

    } else if (situacao === "Abaixo do peso" && idade > 10) {
        titulo = "Cardápio reforçado para crescimento";
        objetivo = "Apoiar crescimento, energia e ganho de peso com alimentos saudáveis.";

        cafe = `
            <li>Leite ou vitamina com aveia</li>
            <li>Ovos mexidos</li>
            <li>Pão integral com queijo</li>
            <li>Fruta com granola</li>
        `;

        lancheManha = `
            <li>Iogurte com aveia</li>
            <li>Castanhas em pequena quantidade</li>
            <li>Fruta</li>
        `;

        almoco = `
            <li>Arroz, feijão ou lentilha</li>
            <li>Frango, carne magra ou peixe</li>
            <li>Legumes cozidos</li>
            <li>Salada colorida</li>
            <li>Azeite em pequena quantidade</li>
        `;

        lancheTarde = `
            <li>Sanduíche natural</li>
            <li>Vitamina de fruta</li>
            <li>Tapioca com queijo</li>
        `;

        jantar = `
            <li>Prato semelhante ao almoço em menor quantidade</li>
            <li>Sopa completa com proteína</li>
            <li>Macarrão simples com frango e legumes</li>
        `;

        ceia = `
            <li>Leite</li>
            <li>Iogurte</li>
            <li>Fruta com aveia</li>
        `;

        evitar = `
            <li>Pular refeições</li>
            <li>Trocar almoço por lanche</li>
            <li>Excesso de doces antes das refeições</li>
        `;

    } else if (situacao === "Peso normal" && idade <= 10) {
        titulo = "Cardápio equilibrado infantil";
        objetivo = "Manter crescimento saudável e bons hábitos alimentares.";

        cafe = `
            <li>Leite ou iogurte natural</li>
            <li>Pão integral ou tapioca</li>
            <li>Fruta da estação</li>
            <li>Ovo mexido ou queijo branco</li>
        `;

        lancheManha = `
            <li>Fruta</li>
            <li>Suco natural sem açúcar</li>
            <li>Iogurte natural</li>
        `;

        almoco = `
            <li>Arroz e feijão</li>
            <li>Frango, ovo ou carne magra</li>
            <li>Legumes cozidos</li>
            <li>Salada de folhas</li>
            <li>Fruta de sobremesa</li>
        `;

        lancheTarde = `
            <li>Vitamina de fruta</li>
            <li>Bolacha integral</li>
            <li>Sanduíche natural pequeno</li>
        `;

        jantar = `
            <li>Sopa de legumes</li>
            <li>Omelete com salada</li>
            <li>Arroz, feijão e frango em menor quantidade</li>
        `;

        ceia = `
            <li>Chá sem açúcar</li>
            <li>Leite morno</li>
            <li>Fruta leve</li>
        `;

        evitar = `
            <li>Refrigerante diariamente</li>
            <li>Excesso de biscoito recheado</li>
            <li>Frituras frequentes</li>
        `;

