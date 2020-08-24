import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssuntosListagemComponent } from './assuntos-listagem.component';

describe('AssuntosListagemComponent', () => {
  let component: AssuntosListagemComponent;
  let fixture: ComponentFixture<AssuntosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssuntosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssuntosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
