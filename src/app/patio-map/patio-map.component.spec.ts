import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatioMapComponent } from './patio-map.component';

describe('PatioMapComponent', () => {
  let component: PatioMapComponent;
  let fixture: ComponentFixture<PatioMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatioMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatioMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
