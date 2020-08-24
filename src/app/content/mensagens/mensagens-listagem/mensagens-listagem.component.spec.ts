import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensListagemComponent } from './mensagens-listagem.component';

describe('MensagensListagemComponent', () => {
  let component: MensagensListagemComponent;
  let fixture: ComponentFixture<MensagensListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagensListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagensListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
