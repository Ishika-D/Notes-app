import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() title: string;
  @Input() body : string;
  @Input() link : string;
  @Input() date : string;
  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output('display') displayEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  //will emit that the note is clicked
  display(){
    this.displayEvent.emit();
  }
  //will tell that the delete button is clicked
  delete(){
    this.deleteEvent.emit();
  }
}
