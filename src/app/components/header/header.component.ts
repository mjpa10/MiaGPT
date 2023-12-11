import { Component } from '@angular/core';
import { TemaBlackService } from 'src/app/tema-black.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private TemaBlackService: TemaBlackService) {}

  toggleTheme() {
    this.TemaBlackService.toggleTheme();
  }

}
