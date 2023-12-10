import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ElementPanelComponent } from './element-panel/element-panel.component';
import { FormPanelComponent } from './form-panel/form-panel.component';
import { CustomizationPanelComponent } from './customization-panel/customization-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ElementPanelComponent, 
    FormPanelComponent, 
    CustomizationPanelComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formz';
}
