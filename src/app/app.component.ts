import { Component, VERSION } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clothing-site-sample';

  constructor(public router: Router) {}
}
