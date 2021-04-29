import { NotesService } from './../Data/notes.service';
import { Data } from './../Data/Data.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes:Data[] = new Array<Data>();

  constructor(private noteservice: NotesService) { }

  ngOnInit(): void {
    this.notes = this.noteservice.getAll();
  }
  deleteNote(id : number){
    this.noteservice.delete(id);
  }
}
