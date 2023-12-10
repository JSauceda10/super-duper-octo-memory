import { Component } from '@angular/core';
import { SectionListComponent } from '../section-list/section-list.component';
import { FormService } from '../../services/form.service';
import { CdkDrag, CdkDragDrop, CdkDropList, DragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-element-panel',
  standalone: true,
  imports: [
    SectionListComponent,
    CdkDrag,
    CdkDropList,
    CommonModule
  ],
  templateUrl: './element-panel.component.html',
  styleUrl: './element-panel.component.scss'
})
export class ElementPanelComponent {
  isPopupVisible = false;
  elements: any[] = [];

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.elements = this.formService.getElements();
  }

  showPopup() {
    this.isPopupVisible = true;
    console.log("Popup opened");
  }

  closePopup($event: Event) {
    $event.stopPropagation();
    this.isPopupVisible = false;
    console.log("Popup closed");
  }

}
