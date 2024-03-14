import {ChangeDetectionStrategy, Component} from '@angular/core'
import {ArticlesListComponent} from '../article/articles-list/articles-list.component'
import {ProfileDetailComponent} from '../profile/profile-detail/profile-detail.component'
import {ArticleCreateComponent} from '../article/article-create/article-create.component'

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    ArticlesListComponent,
    ProfileDetailComponent,
    ArticleCreateComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
