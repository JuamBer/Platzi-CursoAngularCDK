import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './components/button/button.module';
import { BoardsComponent } from './pages/boards/boards.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    OverlayModule,
    FontAwesomeModule,
    CdkAccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
