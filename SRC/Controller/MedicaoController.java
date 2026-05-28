package SRC.Controller;
import SRC.Model.Crianca;
import SRC.Model.Medicao;
public class MedicaoController {

    public void registrar(Crianca c, Medicao m) {

        if (m.getClassificacao().equals("Obesidade")) {
            System.out.println("\n⚠ ALERTA DE SAÚDE!");

            System.out.println("Deseja continuar? (s/n)");
            // aqui você pode ler do Scanner no main
        }

        c.adicionarMedicao(m);

        System.out.println("Medição registrada!");
    }
}