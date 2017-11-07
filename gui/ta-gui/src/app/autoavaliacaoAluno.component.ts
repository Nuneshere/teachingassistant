import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';
import { NgModule, Component, OnInit} from '@angular/core';


@Component({
    selector: 'autoavaliacaoAluno',
    templateUrl: './autoavaliacaoAluno.component.html',
    styleUrls: ['./autoavaliacaoAluno.component.css']
  })

  export class AutoavaliacaoAluno implements OnInit {
    constructor(private alunoService: AlunoService) {}

    alunos: Aluno[];
    
    ngOnInit(): void {
        this.alunoService.getAlunos()
            .then(as => this.alunos = as)
            .catch(erro => alert(erro));
    }

    atualizarAluno(aluno: Aluno): void {
    this.alunoService.atualizar(aluno)
        .catch(erro => alert(erro));
    }
}