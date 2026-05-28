package SRC.Controller;

import SRC.Model.Crianca;

public class AtividadeController {

    public void sugerirAtividades(Crianca c) {
        int idade = c.getIdade();

        System.out.println("\n=== DICAS DE ATIVIDADE FÍSICA ===");
        System.out.println("Criança: " + c.getNome() + " (" + idade + " anos)");

        if (idade <= 10) {
            System.out.println("\nATIVIDADES RECOMENDADAS PARA 7-10 ANOS:");

            System.out.println("\n1. BRINCADEIRAS ATIVAS (60 minutos por dia)");
            System.out.println("   ○ Pega-pega, esconde-esconde");
            System.out.println("   ○ Pular corda");
            System.out.println("   ○ Amarelinha");
            System.out.println("   ○ Dança");

            System.out.println("\n2. ESPORTES (2-3x por semana)");
            System.out.println("   ○ Natação");
            System.out.println("   ○ Futebol");
            System.out.println("   ○ Balé");
            System.out.println("   ○ Judô");

            System.out.println("\n3. ATIVIDADES AO AR LIVRE");
            System.out.println("   ○ Andar de bicicleta");
            System.out.println("   ○ Caminhada com a família");
            System.out.println("   ○ Brincar no parque");

            System.out.println("\nBENEFÍCIOS:");
            System.out.println("• Fortalece ossos e músculos");
            System.out.println("• Ajuda a manter peso saudável");
            System.out.println("• Melhora coordenação motora");
            System.out.println("• Desenvolve habilidades sociais");
            System.out.println("• Melhora o sono e disposição");
        } else {
            System.out.println("\nATIVIDADES RECOMENDADAS PARA MAIORES DE 10 ANOS:");
            System.out.println("• Esportes regulares: vôlei, basquete, corrida");
            System.out.println("• Atividades ao ar livre: bicicleta, caminhada");
            System.out.println("• Treinos estruturados: academia, dança, natação");
        }
    }
}

