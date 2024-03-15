import {ChangeDetectionStrategy, Component} from '@angular/core'
import {MatCard, MatCardContent} from '@angular/material/card'
import {MatButton, MatIconButton} from '@angular/material/button'
import {MatIcon} from '@angular/material/icon'
import {MatBadge} from '@angular/material/badge'
import {MatChip, MatChipSet} from '@angular/material/chips'

@Component({
  selector: 'articles-card',
  standalone: true,
  imports: [MatCardContent, MatCard, MatIconButton, MatIcon, MatBadge, MatChip, MatButton, MatChipSet],
  templateUrl: './articles-card.component.html',
  styleUrl: './articles-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesCardComponent {}
