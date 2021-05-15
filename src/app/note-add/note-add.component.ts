
import { CrudService } from './../service/crud.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit  } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})


export class NoteAddComponent implements OnInit {

  title : string;
  body : string;
  noteId : string;
  new: boolean;

  
  current = new Date();
  constructor(private route:ActivatedRoute, private crudservice: CrudService, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    
    this.route.params.subscribe((params : Params)=>{
      if(params.id){
        this.firestore.collection('notes').doc( params.id).ref.get().then((data)=>{
          this.title = data.data()['title'];
          this.body = data.data()['body'];
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
    note['title'] = this.title;
    note['body'] = this.body;
    note['date'] = this.current.toLocaleDateString();
    if(this.new)
    {
      this.crudservice.addNote( note ).then(res => {
      this.title = "";
      this.body = "";
      console.log( "Data saved" );
      }).catch(error => {
        console.log(error);
      });
    }
    else{
      let note ={ };
      note['title'] = this.title;
      note['body'] = this.body;
      this.crudservice.update( this.noteId, note);
      this.title = "";
      this.body = "";
      console.log("Updated");
  }    
}
clean(){
  this.title = "";
  this.body = "";
}
}