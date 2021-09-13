import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFactsOtherComponent } from './quick-facts-other.component';

describe('QuickFactsOtherComponent', () => {
  let component: QuickFactsOtherComponent;
  let fixture: ComponentFixture<QuickFactsOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickFactsOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickFactsOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
