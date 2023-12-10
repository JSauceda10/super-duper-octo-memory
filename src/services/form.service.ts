import { Injectable } from '@angular/core';
import { ELEMENTS } from '../data/elements';
import { FormSection } from '../data/models';
import { FormItemType } from '../data/enums';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  sections: FormSection[] = [];

  constructor() { }

  getElements() {
    return ELEMENTS;
  }

  createSection() {
    this.sections.push({
      type: FormItemType.SECTION,
    });
  }

  
}
