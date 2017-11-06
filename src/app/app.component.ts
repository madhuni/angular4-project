import { Component } from '@angular/core';

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
  }
}
