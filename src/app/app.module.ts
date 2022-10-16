import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BaseboardComponent } from './components/baseboard/baseboard.component';
import { NotesComponent } from './components/text_box/notes/notes.component';
import { FormsModule } from '@angular/forms';
import { ActivityWallComponent } from './components/activity-wall/activity-wall.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseboardComponent,
    NotesComponent,
    ActivityWallComponent
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
