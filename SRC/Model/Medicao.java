package SRC.Model;
import java.time.LocalDate;

public class Medicao {
    private LocalDate data;
    private double peso;
    private double altura;
    private double imc;
    private String classificacao;

    public Medicao(LocalDate data, double peso, double altura, int idade) {
        this.data = data;
        this.peso = peso;
        this.altura = altura;
        calcularIMC();
        classificar(idade);
    }

    // GETTERS
    public LocalDate getData() { return data; }
    public double getPeso() { return peso; }
    public double getAltura() { return altura; }
    public double getImc() { return imc; }
    public String getClassificacao() { return classificacao; }

    // MÉTODOS DE CÁLCULO
    private void calcularIMC() {
        double alturaMetros = (altura < 3) ? altura : altura / 100;
        this.imc = peso / Math.pow(alturaMetros, 2);
    }

    private void classificar(int idade) {
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 25) {
            classificacao = "Peso Normal";
        } else if (imc < 30) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }
    }
}
