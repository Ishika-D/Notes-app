import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-display',
  templateUrl: './note-display.component.html',
  styleUrls: ['./note-display.component.css']
})

export class NoteDisplayComponent implements OnInit {

  @Input() title : string;
  @Input() body : string;
  
  @Output('close') closeEvent : EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
//This will emit that close btn is clicked
  close(){
    this.closeEvent.emit();
  }
}
