import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BaseboardComponent } from './components/baseboard/baseboard.component';
import { NotesComponent } from './components/text_box/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseboardComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
