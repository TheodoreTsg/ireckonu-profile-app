import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFactsStatusComponent } from './quick-facts-status.component';

describe('QuickFactsStatusComponent', () => {
  let component: QuickFactsStatusComponent;
  let fixture: ComponentFixture<QuickFactsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickFactsStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickFactsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
