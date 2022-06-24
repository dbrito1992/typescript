export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  getCpf(): string {
    return this.cpf;
  }

  getIdade(): number {
    return this.idade;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    return super.getNomeCompleto();
  }
}

const aluno = new Aluno('Diego', 'Brito', 30, '000.000.000-00', 'Sala 001');
console.log(aluno);
console.log(aluno.getNomeCompleto());
