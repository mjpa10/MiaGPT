import { Component } from '@angular/core';
import { TemaBlackService } from './tema-black.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AV22';
  constructor(private TemaBlackService:TemaBlackService) {}

  toggleTheme() {
    this.TemaBlackService.toggleTheme();
  }
}
