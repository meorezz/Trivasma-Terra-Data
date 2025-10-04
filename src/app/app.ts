import { Component } from '@angular/core';
import { FlipbookComponent } from './flipbook/flipbook.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FlipbookComponent],
  template: `<app-flipbook></app-flipbook>`,
  styleUrls: ['./app.css']
})
export class AppComponent {}
