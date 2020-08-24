import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensCadastroComponent } from './mensagens-cadastro.component';

describe('MensagensCadastroComponent', () => {
  let component: MensagensCadastroComponent;
  let fixture: ComponentFixture<MensagensCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagensCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagensCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
