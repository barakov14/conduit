import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {MatIcon} from '@angular/material/icon'
import {MatButton} from '@angular/material/button'
import {Router} from '@angular/router'

@Component({
  selector: 'article-create-button',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './article-create-button.component.html',
  styleUrl: './article-create-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCreateButtonComponent {
  private readonly router = inject(Router)

  onRedirectToCreateArticle() {}
}
