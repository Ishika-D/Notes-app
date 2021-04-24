import { style } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
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
    
    (document.getElementById('textarea') as HTMLInputElement).innerHTML=" ";
  }
  delete(k: number ){
    let j:number;
    for(j=k;j<=this.i;j++)
    {
      this.notes[j]=this.notes[j+1];
    }
    this.i=this.i-1;
    
  }
}
