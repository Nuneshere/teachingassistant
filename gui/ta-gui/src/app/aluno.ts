export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  autoavaliacaoAluno : Map<string,string>;
  metas: Map<string,string>;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.autoavaliacaoAluno = new Map<string,string>();
    this.metas = new Map<string,string>();
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.autoavaliacaoAluno = new Map<string,string>();
    aluno.metas = new Map<string,string>();
    aluno.copyFrom(this);
    return aluno;
  }

  copyFrom(from: Aluno): void {
    this.nome = from.nome;
    this.cpf = from.cpf;
    this.email = from.email;
    this.AutoavaliacaoFrom(from.autoavaliacaoAluno);
    this.copyMetasFrom(from.metas);
  }

  AutoavaliacaoFrom(from: Map<string,string>): void {
    this.autoavaliacaoAluno. = new Map<string,string>();
    for (let key in from) {
      this.autoavaliacaoAluno.[key] = from[key];
    }
  }

  copyMetasFrom(from: Map<string,string>): void {
    this.metas = new Map<string,string>();
    for (let key in from) {
      this.metas[key] = from[key];
    }
  }
}
