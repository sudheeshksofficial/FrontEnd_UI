import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dataretriever } from './dataretriever';

describe('Dataretriever', () => {
  let component: Dataretriever;
  let fixture: ComponentFixture<Dataretriever>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dataretriever]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dataretriever);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
