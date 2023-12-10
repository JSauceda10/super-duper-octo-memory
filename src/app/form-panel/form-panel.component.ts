import { Component } from '@angular/core';
import { FormItemType } from '../../data/enums';
import { CdkDrag, CdkDragDrop, CdkDropList, DragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormService } from '../../services/form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-panel',
  standalone: true,
  imports: [CommonModule, CdkDropList],
  templateUrl: './form-panel.component.html',
  styleUrl: './form-panel.component.scss'
})
export class FormPanelComponent {
  sections: any[] = [];
  sectionList: any;

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.sections = this.formService.sections;
    
  }

  isSectionPredicate(item: CdkDrag<any>) {
    return item?.data?.type === FormItemType.SECTION;
  }

  onSectionDrop(event: CdkDragDrop<any>) {
    //when dropping new section into the list
    //distinuguish between dropping into the list from a different list
    //and dropping from within the list
    if (event.previousContainer !== event.container) {
      //if dropping from a different list
      //create a new section
      this.formService.createSection();
      console.log("New section created");
    } else {
      //if dropping from within the list
      //move the section to the new position
      moveItemInArray(this.sections, event.previousIndex, event.currentIndex);
      console.log("New section created");
    }
    console.log("New section created");
  }

}
