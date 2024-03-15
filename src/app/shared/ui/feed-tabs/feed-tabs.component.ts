import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs'

@Component({
  selector: 'feed-tabs',
  standalone: true,
  imports: [
    MatTabGroup,
    MatTab
  ],
  templateUrl: './feed-tabs.component.html',
  styleUrl: './feed-tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedTabsComponent {
  lotsOfTabs = ['Your Feed', 'Global Feed']
}
