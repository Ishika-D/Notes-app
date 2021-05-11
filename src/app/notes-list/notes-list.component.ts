import { CrudService } from './../service/crud.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  //keyboardEventsManager: ListKeyManager;
  new : boolean;
  ndata : {title : string,body: string};
  N : any;
  x : number;
  Title : string;
  Body : string;
  s ;
  his : string[] = [];
  list: string[] = [];
  bd : string[] = [];
  His : any;
  aval ;
  title : string[] = [];
  body : string[] = [];
  
  constructor( private crudservice : CrudService, private firestore : AngularFirestore) { }

  ngOnInit(): void {

    //displays the notes list on UI
    this.crudservice.getAll().subscribe( data => {
    this.N = data.map(e => {
        return{
          id : e.payload.doc.id,
          title : e.payload.doc.data()['title'],
          body : e.payload.doc.data()['body'],
          date : e.payload.doc.data()['date']
        };
      });
    })

    //getting the history
    this.crudservice.getHistory().subscribe( data =>{
      this.His = data.map(e => {
        return{
          id : e.payload.doc.id,
          title : e.payload.doc.data()['title']
        };
      })
    })

  }

  
  

  //for closing the display of a note
  close(){
    (document.getElementById('something') as HTMLElement).style.display = "block";
    (document.getElementById('display') as HTMLElement).style.display = "none";
  }

  //for displaying the note's details
  display(title , body){
    (document.getElementById('something') as HTMLElement).style.display = "none";
    (document.getElementById('display') as HTMLElement).style.display = "block";
    this.Title = title;
    this.Body = body;
  }

  //deleting the note at the id 
  deleteNote( id ){
    this.crudservice.delete( id );
  }


  //for keyup event for autocompleteting and filtering the notes based on the search
  search( val : any ,event){

    //(document.getElementById('history') as HTMLElement).style.display = "none";
   (document.getElementById('auto') as HTMLElement).style.display = "block";
    for( let note of this.N)
    {
      this.his.push( note.title );
    }
      //console.log( this.his);
      if( val != '' )
      {
        this.list = [];
        this.list = this.his.filter( ( data ) => {
        return data.toLocaleLowerCase().startsWith(val.toLocaleLowerCase());
        } );
  
      }else{
        this.list =this.His.title;
      }
      
    this.his = [];
    if(event.keyCode == 13)
    {
      for( let note of this.N)
      {
        this.title.push( note.title );
        this.body.push( note.body );
      }
      if( this.title.indexOf( this.aval )  > -1 )
      {
        (document.getElementById('auto') as HTMLElement).style.display = "none";
        let index = this.title.indexOf( this.aval );
        console.log(index);
        let value = this.body[ index ];
        this.display( this.aval , value);
        //history adding
        let history : string[] = [];
        for( let i of this.His)
        history.push( i.title );
        
        let idv : string[] = [];
        for(let i of this.His )
        idv.push( i.id );
        console.log(idv)
        if(history.indexOf( this.aval) > -1)
        {
          let index = history.indexOf( this.aval);
          let hisID = idv[index];
          console.log(hisID);
          this.crudservice.deleteHis( hisID );
          
        }
      }else
      {
        (document.getElementById('something') as HTMLElement).style.display = "none";
        (document.getElementById('display') as HTMLElement).style.display = "block";
        (document.getElementById('display') as HTMLElement).innerText = "Not found....";
      }
      let th = { };
          th['title'] = this.aval;
          this.crudservice.addHistory( th ).then(res =>{
            this.aval ="";
            console.log('added history');
          }).catch(err => { console.log(err)});
      
    }
   };

   click( val ){
     if(val == '')
     {
      for( let i of this.His)
      this.list.push( i.title );
      (document.getElementById('auto') as HTMLElement).style.display = "block";
     }
     else
     (document.getElementById('history') as HTMLElement).style.display = "none";
   }

   onclick( title){
    this.aval = title ;
   }

   show(){
     let his : string[] = [];
      for( let i of this.His)
      his.push( i.title );
   }
}

