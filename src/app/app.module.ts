import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { RainbowDirective } from './rainbow.directive';
import { FormsModule } from '@angular/forms';
import { IaComponent } from './pages/ia/ia.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServiceComponent,
    FooterComponent,
    ContatosComponent,
    RainbowDirective,
    IaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
