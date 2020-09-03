import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {Assunto, Segmento} from '../../../model/model';

// /** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-assuntos-cadastro',
  templateUrl: './assuntos-cadastro.component.html',
  styleUrls: ['./assuntos-cadastro.component.scss']
})
export class AssuntosCadastroComponent implements OnInit {

  assunto = new Assunto();

  segmentos: Segmento[] = [
    {id: '1', nome: 'Prime'},
    {id: '2', nome: 'Exclusive'},
    {id: '3', nome: 'Classic'},
    {id: '4', nome: 'Digital'}
  ];

  constructor() { }
  assuntoSegmento = new FormControl('valid', [
    Validators.required
  ]);

  ngOnInit() {
  }

  salvar(assuntoCadastroForm: NgForm) {
    console.log(this.assunto);
    this.adicionarAssunto();
  }

  private adicionarAssunto() {

  }
}
