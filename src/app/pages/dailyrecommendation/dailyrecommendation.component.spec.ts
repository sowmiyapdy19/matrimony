import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyrecommendationComponent } from './dailyrecommendation.component';

describe('DailyrecommendationComponent', () => {
  let component: DailyrecommendationComponent;
  let fixture: ComponentFixture<DailyrecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyrecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyrecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
