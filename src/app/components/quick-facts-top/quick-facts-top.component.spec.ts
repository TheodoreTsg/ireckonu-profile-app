import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFactsTopComponent } from './quick-facts-top.component';

describe('QuickFactsTopComponent', () => {
  let component: QuickFactsTopComponent;
  let fixture: ComponentFixture<QuickFactsTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickFactsTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickFactsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
