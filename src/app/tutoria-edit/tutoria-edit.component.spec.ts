import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoriaEditComponent } from './tutoria-edit.component';

describe('TutoriaEditComponent', () => {
  let component: TutoriaEditComponent;
  let fixture: ComponentFixture<TutoriaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutoriaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoriaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
