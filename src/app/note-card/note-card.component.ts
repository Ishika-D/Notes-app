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
    //this.new.emit(true);
  }
  display(){
    this.displayEvent.emit();
  }

  delete(){
    this.deleteEvent.emit();
  }
}
