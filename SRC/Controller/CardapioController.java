package SRC.Controller;

import SRC.Model.Crianca;
import SRC.Model.Medicao;

public class CardapioController {

    public void sugerirCardapio(Crianca c) {
        if (c.getMedicoes().isEmpty()) {
            System.out.println("Nenhuma medição encontrada para " + c.getNome());
            return;
        }

        Medicao ultima = c.getMedicoes().get(c.getMedicoes().size() - 1);
        String classificacao = ultima.getClassificacao();
        int idade = c.getIdade();

        System.out.println("\n=== CARDÁPIO SUGERIDO ===");
        System.out.println("Criança: " + c.getNome() + " (" + idade + " anos)");
        System.out.println("Classificação atual: " + classificacao);

        System.out.println("\nCAFÉ DA MANHÃ (7h30):");
        System.out.println("• 1 copo de leite (200ml) ou iogurte natural");
        System.out.println("• 1 pão francês com margarina ou 2 biscoitos cream cracker");
        System.out.println("• 1 fruta (banana, maçã ou mamão)");

        System.out.println("\nLANCHE DA MANHÃ (10h):");
        System.out.println("• 1 fruta ou suco natural");

        System.out.println("\nALMOÇO (12h):");
        System.out.println("• Arroz (4 colheres de sopa)");
        System.out.println("• Feijão (1 concha)");
        System.out.println("• Bife grelhado ou frango (1 filé médio) ou ovo");
        System.out.println("• Salada de alface e tomate à vontade");
        System.out.println("• 1 fruta de sobremesa");

        System.out.println("\nLANCHE DA TARDE (15h30):");
        System.out.println("• 1 copo de vitamina de frutas");
        System.out.println("• 1 pão de queijo pequeno ou bolacha integral");

        System.out.println("\nJANTAR (19h):");
        System.out.println("• Sopa de legumes com carne");
        System.out.println("• ou mesmo do almoço em menor quantidade");

        System.out.println("\nCEIA (21h):");
        System.out.println("• Chá ou leite morno");
    }
}
