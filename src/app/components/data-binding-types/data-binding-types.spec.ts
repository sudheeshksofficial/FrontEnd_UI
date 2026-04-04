import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingTypes } from './data-binding-types';

describe('DataBindingTypes', () => {
  let component: DataBindingTypes;
  let fixture: ComponentFixture<DataBindingTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBindingTypes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
