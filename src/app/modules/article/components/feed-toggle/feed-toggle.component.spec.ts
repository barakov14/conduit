import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedToggleComponent } from './feed-toggle.component';

describe('FeedToggleComponent', () => {
  let component: FeedToggleComponent;
  let fixture: ComponentFixture<FeedToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
