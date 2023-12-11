import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaBlackService {
  private isDarkTheme: boolean = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.applyTheme();
  }

  private applyTheme() {
    const body = document.getElementsByTagName('body')[0];

    if (this.isDarkTheme) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }

  isDarkThemeEnabled() {
    return this.isDarkTheme;
  }
}
