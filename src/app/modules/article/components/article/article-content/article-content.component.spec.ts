import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleContentComponent } from './article-content.component';

describe('ArticleContentComponent', () => {
  let component: ArticleContentComponent;
  let fixture: ComponentFixture<ArticleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
