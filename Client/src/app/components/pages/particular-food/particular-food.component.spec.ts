import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularFoodComponent } from './particular-food.component';

describe('ParticularFoodComponent', () => {
  let component: ParticularFoodComponent;
  let fixture: ComponentFixture<ParticularFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticularFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticularFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
