import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProjetoPage } from './modal-projeto.page';

describe('ModalProjetoPage', () => {
  let component: ModalProjetoPage;
  let fixture: ComponentFixture<ModalProjetoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProjetoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProjetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
