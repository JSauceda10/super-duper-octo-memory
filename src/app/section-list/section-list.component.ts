import { Component } from '@angular/core';
import { FormItemType } from '../../data/enums';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-section-list',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
  templateUrl: './section-list.component.html',
  styleUrl: './section-list.component.scss'
})
export class SectionListComponent {
  draggableSectionList: any[] = [
    {
      FormItemType: FormItemType.SECTION,
      //TODO: Add different values based on different section types
    },
  ];




}
