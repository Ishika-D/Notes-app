
import { CrudService } from './../service/crud.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Data } from './../Data/Data.model';
import { Component, OnInit  } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})


export class NoteAddComponent implements OnInit {
  N : any;
  ndata=Data.prototype;
  data = Data.prototype;
  noteId : string;
  new: boolean;
  x : number;
  msg : string;
  i : number;
  s : any;
  k;
  current = new Date();
  constructor(private route:ActivatedRoute, private crudservice: CrudService, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((params : Params)=>{
      if(params.id){
        this.firestore.collection('notes').doc( params.id).ref.get().then((data)=>{
          this.s = data.data()['title'];
          this.k = data.data()['body'];
          this.data.title = this.s;
          this.data.note_body = this.k;
          console.log(this.s);
        })
        this.noteId = params.id;
        this.new = false;
      }
        else
        {
          this.new = true;
        }
    })
  }
  
  Save(){
    let note ={ };
    note['title'] = this.data.title;
    note['body'] = this.data.note_body;
    note['date'] = this.current.toLocaleDateString();
    if(this.new)
    {
      this.crudservice.addNote( note ).then(res => {
      this.data.title = "";
      this.data.note_body = "";
      this.msg = "Data saved";
      console.log( this.msg );
      }).catch(error => {
        console.log(error);
      });
    }
    else{
      // this.crudservice.getAll().subscribe( data => {
      //   this.N = data.map(e => {
      //       return{
      //         id : e.payload.doc.id,
      //         title : e.payload.doc.data()['title'],
      //         body : e.payload.doc.data()['body']
      //       };
      //     }) 
      //   })
      let note ={ };
      note['title'] = this.data.title;
      note['body'] = this.data.note_body;
      this.crudservice.update( this.noteId, note);
      this.data.title = "";
      this.data.note_body = "";
      console.log("Updated");
  }    
}
clean(){
  this.data.title = "";
  this.data.note_body = "";
}
}