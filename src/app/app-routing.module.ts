import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDisplayComponent } from './note-display/note-display.component';
import { NoteAddComponent } from './note-add/note-add.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
    { path:'', component:MainLayoutComponent, children:[
      {path:'', component : NotesListComponent},
      {path:'new', component:NoteAddComponent},
      {path:':id', component:NoteAddComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
