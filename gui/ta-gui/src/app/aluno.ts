export class Aluno {
  nome: string;
  cpf: string;
  email: string;
  avaliacaodoAluno : Map<string,string>;
  metas: Map<string,string>;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.avaliacaodoAluno = new Map<string,string>();
    this.metas = new Map<string,string>();
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.avaliacaodoAluno = new Map<string,string>();
    aluno.metas = new Map<string,string>();
    aluno.copyFrom(this);
    return aluno;
  }

  copyFrom(from: Aluno): void {
    this.nome = from.nome;
    this.cpf = from.cpf;
    this.email = from.email;
    this.AutoavaliacaoFrom(from.avaliacaodoAluno);
    this.copyMetasFrom(from.metas);
  }

  AutoavaliacaoFrom(from: Map<string,string>): void {
    this.avaliacaodoAluno = new Map<string,string>();
    for (let key in from) {
      this.avaliacaodoAluno[key] = from[key];
    }
  }

  copyMetasFrom(from: Map<string,string>): void {
    this.metas = new Map<string,string>();
    for (let key in from) {
      this.metas[key] = from[key];
    }
  }
}
