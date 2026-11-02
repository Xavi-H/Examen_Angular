import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('examen');
}
