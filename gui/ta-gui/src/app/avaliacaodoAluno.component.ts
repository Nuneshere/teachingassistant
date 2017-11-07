import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';
import { NgModule, Component, OnInit} from '@angular/core';


@Component({
    selector: 'AvaliacaodoAluno',
    templateUrl: './avaliacaodoAluno.component.html',
    styleUrls: ['./avaliacaodoAluno.component.css']
  })

  export class AvaliacaodoAluno implements OnInit {
    constructor(private alunoService: AlunoService) {}

    alunos: Aluno[];
    
    ngOnInit(): void {
        this.alunoService.getAlunos()
            .then(as => this.alunos = as)
            .catch(erro => alert(erro));
    }

    renovaAluno(aluno: Aluno): void {
    this.alunoService.atualizar(aluno)
        .catch(erro => alert(erro));
    }
}