import { CrudService } from './../service/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})

export class NotesListComponent implements OnInit {

  showAutoComp : boolean = false; //for showing autocomplete list
  hideNote: boolean = true; //for hiding note list
  notesList : any;  //property is being used for storing the notes list from backend
  Title : string; //property binded to the title of the note for display
  Body : string; //property binded to the note body of the note for display
  historyList : string[] = []; //saves the history in the array form
  list: string[] = []; //saves the tirle in the array form
  historyBackend : any; //property is being used for storing the history from backend
  Search : string; //property binded to the search input 
  title : string[] = [];
  body : string[] = [];
  
  constructor( private crudservice : CrudService ) { }

  ngOnInit(): void {

    //displays the notes list on UI
    this.crudservice.getAll().subscribe( data => {
    this.notesList = data.map(e => {
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
      this.historyBackend = data.map(e => {
        return{
          id : e.payload.doc.id,
          title : e.payload.doc.data()['title']
        };
      })
    })

  }

  //for closing the display of a note
  close(){
    this.hideNote = !this.hideNote;
  }

  //for displaying the note's details
  display(title : string , body : string){
    this.hideNote = !this.hideNote;
    this.Title = title;
    this.Body = body;
    this.showAutoComp = false;
  }

  //deleting the note at the id 
  deleteNote( id : string ){
    this.crudservice.delete( id );
  }

  //for keyup event for autocompleteting and filtering the notes based on the search
  search( val : any , event : any){

    this.showAutoComp = true;
    this.historyList = [];

    for( let note of this.notesList)
    {
      this.historyList.push( note.title );
    }

    //if value of search input exists then, it will filter the titles
    if( val )
    {
        this.list = this.historyList.filter( ( data ) => {
        return data.toLocaleLowerCase().startsWith(val.toLocaleLowerCase());
        } );
    }
      
    //if we press "enter" it will display the note details
    if(event.keyCode == 13)
    {
      for( let note of this.notesList)
      {
        this.title.push( note.title );
        this.body.push( note.body );
      }

      //searches the entered value in the notesList arrays and if it exists then, it will display the note
      if( this.title.indexOf( this.Search )  > -1 )
      {
        let index = this.title.indexOf( this.Search );
        console.log(index);
        let value = this.body[ index ];
        this.display( this.Search , value);

        let history : string[] = [];
        for( let i of this.historyBackend)
        history.push( i.title );
        
        let IdList : string[] = [];
        for(let i of this.historyBackend )
        IdList.push( i.id );
        
        // This will add the history and delete the before history of that title
        if( history.indexOf( this.Search) > -1)
        {
          let index = history.indexOf( this.Search );
          let hisID = IdList[index];
          console.log( hisID );
          this.crudservice.deleteHis( hisID ); 
        }

        let historyadd = { };
          historyadd['title'] = this.Search;
          this.crudservice.addHistory( historyadd ).then( res =>{
            this.Search ="";
            console.log('added history');
          }).catch(err => { console.log(err)});
      }else
      {
        alert("Not Found");
      }
    }
   };

   //onclicking the search input it will display the previous historys list
   click( Enterval : string ){
    this.showAutoComp = true;
     if( !Enterval )
     {
        // this.list = [];
        this.historyList = [];
        for( let note of this.historyBackend)
          this.historyList.push( note.title );
        this.list = this.historyList;
     }
   }

   //onfocus any title, it will display that in the search input
   onfocus( title : string ){
    this.Search = title ;
   }
   //onfocus out of the search input it will hide the autocomplete list
   focusout(){
     this.showAutoComp = false;
   }
}

