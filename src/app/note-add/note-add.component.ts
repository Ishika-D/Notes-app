import { ActivatedRoute, Params } from '@angular/router';
import { NotesService } from './../Data/notes.service';
import { Data } from './../Data/Data.model';
import { Component, OnInit ,Inject } from '@angular/core';


@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})


export class NoteAddComponent implements OnInit {

  ndata=Data.prototype;
  data = Data.prototype;
  notes : Data[] = new Array<Data>();
  noteId : number;
  new: boolean;

  constructor(private  notesService : NotesService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.data = new Data();
    // if(this.new==false){
    //   (document.getElementsByClassName("Title") as HTMLElement).style.disabled = true;
    // }
    this.route.params.subscribe((params : Params)=>{
      if(params.id){
        this.data = this.notesService.get(params.id);
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
    if(this.new)
    {
      this.notesService.add(this.data);
    }
    else{
      this.notesService.update(this.noteId, this.data.title, this.data.note_body);
    }
    console.log(this.data,this.new);
    localStorage.setItem("token",this.data.title);
  }
}