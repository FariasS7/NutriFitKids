package SRC.Model;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;



public class Crianca {

    private int id;
    private String nome;
    private LocalDate dataNascimento;
    private String sexo;
    private String responsavel;
    private String contato;
    private ArrayList<Medicao> medicoes;

    public Crianca(int id, String nome, LocalDate dataNascimento,
                   String sexo, String responsavel, String contato) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.responsavel = responsavel;
        this.contato = contato;
        this.medicoes = new ArrayList<>();
    }
    public void setId(int id) {
    this.id = id;
    }

    public int getIdade() {
        return Period.between(dataNascimento, LocalDate.now()).getYears();
    }

    public void adicionarMedicao(Medicao m) {
        medicoes.add(m);
    }

    public ArrayList<Medicao> getMedicoes() {
        return medicoes;
    }

    public String getNome() {
        return nome;
    }

    public int getId() {
        return id;
    }
}
