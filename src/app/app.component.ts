import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject('cspMetaSelector') private metaCsp: string) {
    console.log('CSP meta selector:', document.querySelector(metaCsp)?.getAttribute('content'));
  }
  title = 'angular15csp';
}
