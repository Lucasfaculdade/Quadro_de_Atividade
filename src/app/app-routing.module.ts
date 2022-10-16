import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityWallComponent } from './components/activity-wall/activity-wall.component';
import { NotesComponent } from './components/text_box/notes/notes.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'activity-wall',
    pathMatch: 'full'
  },
  {
    path: 'activity-wall',
    component: ActivityWallComponent
  },
  {
    path: 'criarAtividade',
    component: NotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
