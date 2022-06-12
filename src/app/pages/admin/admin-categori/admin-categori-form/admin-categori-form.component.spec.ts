import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriFormComponent } from './admin-categori-form.component';

describe('AdminCategoriFormComponent', () => {
  let component: AdminCategoriFormComponent;
  let fixture: ComponentFixture<AdminCategoriFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoriFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoriFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
