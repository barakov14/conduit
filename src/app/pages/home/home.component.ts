import {ChangeDetectionStrategy, Component} from '@angular/core'
import {ArticleCreateUiComponent} from '../article/article-create/article-create-ui/article-create-ui.component'
import {ArticleCreateContainerComponent} from '../article/article-create/article-create-container/article-create-container.component'
import {ProfileViewContainerComponent} from '../profile/profile/profile-view-container/profile-view-container.component'
import {ArticlesListContainerComponent} from '../article/articles-list/articles-list-container/articles-list-container.component'
import {RouterOutlet} from '@angular/router'

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    ArticleCreateUiComponent,
    ArticleCreateContainerComponent,
    ProfileViewContainerComponent,
    ArticlesListContainerComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
