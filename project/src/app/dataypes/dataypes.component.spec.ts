import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataypesComponent } from './dataypes.component';

describe('DataypesComponent', () => {
  let component: DataypesComponent;
  let fixture: ComponentFixture<DataypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
