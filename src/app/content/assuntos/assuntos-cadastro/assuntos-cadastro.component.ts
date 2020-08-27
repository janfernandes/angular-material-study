import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {Assunto} from '../../../model/model';

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
