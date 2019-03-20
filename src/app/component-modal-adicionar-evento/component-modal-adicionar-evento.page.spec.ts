import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentModalAdicionarEventoPage } from './component-modal-adicionar-evento.page';

describe('ComponentModalAdicionarEventoPage', () => {
  let component: ComponentModalAdicionarEventoPage;
  let fixture: ComponentFixture<ComponentModalAdicionarEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentModalAdicionarEventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentModalAdicionarEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
