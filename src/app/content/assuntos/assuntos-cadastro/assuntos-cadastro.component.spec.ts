import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntosCadastroComponent } from './assuntos-cadastro.component';

describe('AssuntosCadastroComponent', () => {
  let component: AssuntosCadastroComponent;
  let fixture: ComponentFixture<AssuntosCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuntosCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuntosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
