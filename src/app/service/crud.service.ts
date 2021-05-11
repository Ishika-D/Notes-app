
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  constructor( public fireservice : AngularFirestore) { }
  addNote( note ){
    return this.fireservice.collection('notes').add( note );
  }
  getAll(){
    return this.fireservice.collection('notes').snapshotChanges();
  }
  update( id , note ){
    this.fireservice.doc('notes/'+id).update(note);
  }
  delete(id){
    this.fireservice.doc('notes/'+id).delete();
  }
  getHistory(){
    return this.fireservice.collection('History').snapshotChanges();
  }
  addHistory( searcht ){
    return this.fireservice.collection('History').add( searcht );
  }
  deleteHis(id){
    this.fireservice.doc('History/'+id).delete();
  }
}
