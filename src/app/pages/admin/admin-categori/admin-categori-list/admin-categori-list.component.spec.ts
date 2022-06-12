import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriListComponent } from './admin-categori-list.component';

describe('AdminCategoriListComponent', () => {
  let component: AdminCategoriListComponent;
  let fixture: ComponentFixture<AdminCategoriListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoriListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
