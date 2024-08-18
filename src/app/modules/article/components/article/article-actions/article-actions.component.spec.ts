import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleActionsComponent } from './article-actions.component';

describe('ArticleActionsComponent', () => {
  let component: ArticleActionsComponent;
  let fixture: ComponentFixture<ArticleActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
