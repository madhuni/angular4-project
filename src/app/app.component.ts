import { Component } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  onActivate() {
    // scrolling to the top when the route changes
    window.scrollTo(0, 0);

    const currentLocation: string = window.location.pathname;

    if (currentLocation !== '/products/halo' || '/products/pentagram' || '/products/estrella') {
      console.log('if condition is true now');
      $('.nav__list__item--have-sub-list').removeClass('active');
    }

    if (currentLocation === '/products/halo') {
      $('.nav__list__item--have-sub-list').addClass('active');
    } else if (currentLocation === '/products/pentagram') {
      $('.nav__list__item--have-sub-list').addClass('active');
    } else if (currentLocation === '/products/estrella') {
      $('.nav__list__item--have-sub-list').addClass('active');
    }

  }
}
