import { Component } from '@angular/core';

@Component({
  selector: 'app-customization-panel',
  standalone: true,
  imports: [],
  templateUrl: './customization-panel.component.html',
  styleUrl: './customization-panel.component.scss'
})
export class CustomizationPanelComponent {

  openTab(e: any) {
    e.preventDefault();
    console.log(e);
    let id = e.target.id;
    let clickedPanel = document.getElementById(id);
    let nav_1_panel = document.getElementById('ngb-nav-1-panel');
    let nav_0_panel = document.getElementById('ngb-nav-0-panel');

    if (id == 'ngb-nav-1') {
      let navPanel0 = document.getElementById('ngb-nav-0');

      navPanel0?.classList.remove('active');
      navPanel0?.setAttribute('aria-selected', 'false');
      navPanel0?.removeAttribute('aria-controls');

      clickedPanel?.setAttribute('aria-controls', 'ngb-nav-1-panel');

      nav_0_panel?.classList.remove('active');
      nav_0_panel?.classList.remove('show');

      nav_1_panel?.classList.add('active');
      nav_1_panel?.classList.add('show');

    } else {
      let navPanel1 = document.getElementById('ngb-nav-1');

      navPanel1?.classList.remove('active');
      navPanel1?.setAttribute('aria-selected', 'false');
      navPanel1?.removeAttribute('aria-controls');

      clickedPanel?.setAttribute('aria-controls', 'ngb-nav-0-panel');

      nav_1_panel?.classList.remove('active');
      nav_1_panel?.classList.remove('show');

      nav_0_panel?.classList.add('active');
      nav_0_panel?.classList.add('show');
    }

    clickedPanel?.classList.add('active');
    clickedPanel?.setAttribute('aria-selected', 'true');
  }

}
