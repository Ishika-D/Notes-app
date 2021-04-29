import { Data } from './Data.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notesArray : Data[] = new Array<Data>();
  constructor() { }

  get( id : number){
    return this.notesArray[id];
  }

  getAll(){
    return this.notesArray;
  }
  getId(note : Data){
    return this.notesArray.indexOf(note);
  }

  add(note : Data){
    let newLen = this.notesArray.push(note);
    let index = newLen - 1 ;
    return index;
  }

  update(id : number, title : string, body : string){
    let note = this.notesArray[id];
    note.title = title;
    note.note_body=body;
  }

  delete(id : number){
    this.notesArray.splice(id,1);
  }
}
