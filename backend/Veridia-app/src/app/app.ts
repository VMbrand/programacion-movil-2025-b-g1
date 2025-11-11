import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [IonicModule, RouterModule],
  templateUrl: './app.html',
})
export class AppComponent {}
