import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  
  atividade = {
    id:'1',
    funcao: 'Organizar...... ',
    responsavel: 'Desenvolvedor.....',
    prioridade: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  salvarAtividade(){
    alert("Nova atividade criada")
  }

  resetarPagina(){

  }
}
