import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  servicos = [
    {
      icone: './../../../assets/img/icon_ai.png',
      texto: 'Somos especialistas em Inteligência Artificial (AI). Trabalhamos para encontrar soluções tecnologicamente inteligentes para todas as áreas empresariais.'
    },
    {
      icone: './../../../assets/img/icon_lab.png',
      texto: 'Nossos laboratórios são os mais modernos da atualidade.'
    },
    {
      icone: './../../../assets/img/icon_computer.png',
      texto: 'Os nossos programadores são os técnicos mais experientes do mercado.'
    }
  ];
}
