package SRC.Controller;

import SRC.Model.Crianca;
import java.util.ArrayList;

public class RelatorioController {

    public void gerarRelatorio(ArrayList<Crianca> lista) {
        int total = lista.size();
        int normal = 0, sobrepeso = 0, obesidade = 0, abaixo = 0;

        for (Crianca cri : lista) {
            if (!cri.getMedicoes().isEmpty()) {
                String classif = cri.getMedicoes()
                        .get(cri.getMedicoes().size() - 1)
                        .getClassificacao();
                switch (classif) {
                    case "Peso Normal": normal++; break;
                    case "Sobrepeso": sobrepeso++; break;
                    case "Obesidade": obesidade++; break;
                    case "Abaixo do peso": abaixo++; break;
                }
            }
        }

        System.out.println("\nRELATÓRIO DA TURMA");
        System.out.println("Total de crianças: " + total);
        System.out.println("Abaixo do peso: " + abaixo);
        System.out.println("Peso Normal: " + normal);
        System.out.println("Sobrepeso: " + sobrepeso);
        System.out.println("Obesidade: " + obesidade);
    }
}
