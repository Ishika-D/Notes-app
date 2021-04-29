import { AppRoutingModule } from './../app-routing.module';
import { ActivatedRoute, Params, Router, Routes } from '@angular/router';
import { NotesService } from './../Data/notes.service';
import { Data } from './../Data/Data.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-display',
  templateUrl: './note-display.component.html',
  styleUrls: ['./note-display.component.css']
})
export class NoteDisplayComponent implements OnInit {

  
  constructor(private notesService : NotesService, private route : ActivatedRoute) { }

  ngOnInit(): void {
  }
}
