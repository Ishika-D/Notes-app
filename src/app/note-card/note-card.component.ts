import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() title:string;
  @Input() body : string;
  @Input() link : number;

  @Output('delete') deleteEvent: EventEmitter<void>= new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.deleteEvent.emit();
  }
  
}
