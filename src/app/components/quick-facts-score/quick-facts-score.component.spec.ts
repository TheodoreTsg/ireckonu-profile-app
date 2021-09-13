import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFactsScoreComponent } from './quick-facts-score.component';

describe('QuickFactsScoreComponent', () => {
  let component: QuickFactsScoreComponent;
  let fixture: ComponentFixture<QuickFactsScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickFactsScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickFactsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
