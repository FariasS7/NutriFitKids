package SRC.View;
import java.time.LocalDate;
import java.util.Scanner;
import SRC.Model.Crianca;
import SRC.Model.Medicao;
import SRC.Controller.CriancaController;
import SRC.Controller.MedicaoController;
import SRC.Controller.CardapioController;
import SRC.Controller.AtividadeController;
import SRC.Controller.RelatorioController;
import SRC.Controller.HistoricoController;



public class Sistema {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        CriancaController cs = new CriancaController();
        MedicaoController ms = new MedicaoController();
        CardapioController cardapioService = new CardapioController();
        AtividadeController atividadeService = new AtividadeController();
        RelatorioController relatorioService = new RelatorioController();
        HistoricoController historicoService = new HistoricoController();


        int opcao;

        do {
            System.out.println("\n=== SAÚDE NA ESCOLA ===");
            System.out.println("1 - Gerenciar crianças");
            System.out.println("2 - Registrar medição");
            System.out.println("3 - Visualizar IMC atual");
            System.out.println("4 - Histórico");
            System.out.println("5 - Cardápio");
            System.out.println("6 - Atividade física");
            System.out.println("7 - Relatório");
            System.out.println("8 - Sair");

            opcao = sc.nextInt();

            switch (opcao) {

                case 1:
                    System.out.println("Nome:");
                    sc.nextLine();
                    String nome = sc.nextLine();

                    System.out.println("Data nascimento (yyyy-mm-dd):");
                    LocalDate data = LocalDate.parse(sc.nextLine());

                    int id = cs.gerarId();

                    Crianca c = new Crianca(id, nome, data,
                            "F", "Responsável", "9999");

                    cs.cadastrar(c);

                    System.out.println("Cadastrado com ID: " + id);
                    break;

                case 2:
                    System.out.println("ID da criança:");
                    int idBusca = sc.nextInt();

                    Crianca crianca = cs.buscarPorId(idBusca);

                    if (crianca != null) {

                        System.out.println("Peso:");
                        double peso = sc.nextDouble();

                       System.out.println("Altura (cm ou m):");
                       double altura = sc.nextDouble();


                        Medicao m = new Medicao(
                                LocalDate.now(),
                                peso,
                                altura,
                                crianca.getIdade()
                        );

                        ms.registrar(crianca, m);
                    }
                    break;

                    case 3:
                    System.out.println("ID da criança:");
                    int idImc = sc.nextInt();
                    Crianca criancaImc = cs.buscarPorId(idImc);
                    historicoService.mostrarImcAtual(criancaImc);
                   break;

                    

                    case 4:
                    System.out.println("ID da criança:");
                    int idHist = sc.nextInt();
                    Crianca criancaHist = cs.buscarPorId(idHist);
                    historicoService.mostrarHistorico(criancaHist);
                    break;

  
                    case 5:
                    System.out.println("ID da criança:");
                    int idCardapio = sc.nextInt();
                    Crianca criancaCardapio = cs.buscarPorId(idCardapio);

                    if (criancaCardapio != null) {
                    cardapioService.sugerirCardapio(criancaCardapio);
                    } else {
                    System.out.println("Criança não encontrada!");
                    }
                    break;

                    case 6:
                    System.out.println("ID da criança:");
                    int idAtiv = sc.nextInt();
                    Crianca criancaAtiv = cs.buscarPorId(idAtiv);

                    if (criancaAtiv != null) {
                    atividadeService.sugerirAtividades(criancaAtiv);
                    } else {
                    System.out.println("Criança não encontrada!");
                    }
                    break;
                    case 7:
                    relatorioService.gerarRelatorio(cs.listar());
                    break;

            }

        } while (opcao != 8);
    }
}