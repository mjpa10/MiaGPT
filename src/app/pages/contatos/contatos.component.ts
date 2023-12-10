import { Component } from '@angular/core';
import { TemaBlackService } from 'src/app/tema-black.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent  {
  constructor(private TemaBlackService: TemaBlackService) {}

  toggleTheme() {
    this.TemaBlackService.toggleTheme();
  }


}
