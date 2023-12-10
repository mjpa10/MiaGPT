import { Component } from '@angular/core';
import { TemaBlackService } from 'src/app/tema-black.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private TemaBlackService: TemaBlackService) {}

  toggleTheme() {
    this.TemaBlackService.toggleTheme();
  }

}
