import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplerCardComponent } from './discipler-card.component';

describe('DisciplerCardComponent', () => {
  let component: DisciplerCardComponent;
  let fixture: ComponentFixture<DisciplerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
