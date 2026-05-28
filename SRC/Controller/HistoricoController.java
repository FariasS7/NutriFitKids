package SRC.Controller;

import SRC.Controller.HistoricoController;


import SRC.Model.Crianca;
import SRC.Model.Medicao;

public class HistoricoController {

    public void mostrarImcAtual(Crianca c) {
        if (c == null) {
            System.out.println("Criança não encontrada!");
            return;
        }

        if (c.getMedicoes().isEmpty()) {
            System.out.println("Nenhuma medição registrada para " + c.getNome());
            return;
        }

        Medicao ultima = c.getMedicoes().get(c.getMedicoes().size() - 1);
        System.out.println("\n=== IMC ATUAL ===");
        System.out.println("Criança: " + c.getNome());
        System.out.println("Data: " + ultima.getData());
        System.out.println("IMC: " + String.format("%.2f", ultima.getImc()) +
                           " (" + ultima.getClassificacao() + ")");
    }

    public void mostrarHistorico(Crianca c) {
        if (c == null) {
            System.out.println("Criança não encontrada!");
            return;
        }

        if (c.getMedicoes().isEmpty()) {
            System.out.println("Nenhuma medição registrada para " + c.getNome());
            return;
        }

        System.out.println("\n=== HISTÓRICO DE MEDIÇÕES ===");
        System.out.println("Criança: " + c.getNome());

        System.out.println("\nDATA | PESO (kg) | ALTURA (cm) | IMC | CLASSIFICAÇÃO");
        System.out.println("----------------------------------------------------");

        for (Medicao m : c.getMedicoes()) {
            System.out.println(
                m.getData() + " | " +
                m.getPeso() + " | " +
                m.getAltura() + " | " +
                String.format("%.2f", m.getImc()) + " | " +
                m.getClassificacao()
            );
        }
    }
}


