import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosPage } from './projetos.page';

describe('ProjetosPage', () => {
  let component: ProjetosPage;
  let fixture: ComponentFixture<ProjetosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
