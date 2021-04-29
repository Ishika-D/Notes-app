import { NoteAddComponent } from './note-add/note-add.component';
import { NotesService } from './Data/notes.service';
import { Data } from './Data/Data.model';
import { Component} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  
  constructor(private NotesService : NotesService, public dialog: MatDialog, private route : ActivatedRoute) {}
  
  ngOnInit(): void {
  }
  
}