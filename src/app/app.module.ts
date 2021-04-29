import { MatSliderModule } from '@angular/material/slider';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteDisplayComponent } from './note-display/note-display.component';
import { NoteAddComponent } from './note-add/note-add.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteDisplayComponent,
    NoteAddComponent,
    NotesListComponent,
    NoteCardComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    MatDialogModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatExpansionModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { 
}
