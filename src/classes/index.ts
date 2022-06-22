export class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaboradores[] = [];

  constructor(nome: string) {
    this.nome = nome;
  }

  adcionaColaboradores(colaborador: Colaboradores): void {
    this.colaboradores.push(colaborador);
  }
  exibeColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaboradores {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}
const empresa1 = new Empresa('Força Web');
const col = new Colaboradores('Maria', 'Silva');
const col2 = new Colaboradores('Diego', 'Silva');
const col3 = new Colaboradores('Rosa', 'Silva');
empresa1.adcionaColaboradores(col);
empresa1.adcionaColaboradores(col2);
empresa1.adcionaColaboradores(col3);
empresa1.exibeColaboradores();
console.log(empresa1);
