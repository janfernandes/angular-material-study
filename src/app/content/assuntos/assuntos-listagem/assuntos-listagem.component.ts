import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-assuntos-listagem',
  templateUrl: './assuntos-listagem.component.html',
  styleUrls: ['./assuntos-listagem.component.scss']
})
export class AssuntosListagemComponent implements OnInit {
  displayedColumns: string[] = ['texto', 'editar', 'excluir'];
  dataSource = new MatTableDataSource<AssuntosLista>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface AssuntosLista {
  texto: string;
  editar: string;
  excluir: string;
}

const ELEMENT_DATA: AssuntosLista[] = [
  {texto: 'Boas Vindas', editar: 'sim', excluir: 'sim'},
  {texto: 'Cartões', editar: 'sim', excluir: 'sim'},
  {texto: 'Consórcio', editar: 'sim', excluir: 'sim'},
  {texto: 'Emprestimos', editar: 'sim', excluir: 'sim'},
  {texto: 'Descontos', editar: 'sim', excluir: 'sim'},
  {texto: 'Renegociação de dívidas', editar: 'sim', excluir: 'sim'},
];
