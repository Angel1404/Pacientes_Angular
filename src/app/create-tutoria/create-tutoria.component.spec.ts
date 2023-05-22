import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTutoriaComponent } from './create-tutoria.component';

describe('CreateTutoriaComponent', () => {
  let component: CreateTutoriaComponent;
  let fixture: ComponentFixture<CreateTutoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTutoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTutoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
