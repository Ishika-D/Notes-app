import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes:string[] = [];
  i=0;
  constructor() {
  }
  
  ngOnInit(): void {
  }
  add(){
    let msg: string;
    // if((document.getElementById('notes') as HTMLInputElement).value!=null)
    msg=(document.getElementById('notes') as HTMLInputElement).value;
    this.notes[this.i]=msg;
    this.i++;
    // this.mdoe={addme:" "};
    
    (document.getElementById('textarea') as HTMLInputElement).innerText="null";
  }
}
