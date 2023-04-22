import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * https://javascript.plainenglish.io/the-new-features-of-angular-v14-851995870f59
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {}
