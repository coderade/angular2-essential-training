import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styles: [`
    h1{ color: #FFFFFF }
    .description {
      font-style : italic;
      color: green;
    }
  `]
})
export class AppComponent {}
