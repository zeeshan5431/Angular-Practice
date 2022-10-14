import { Component } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent  {
  name:string = "Zeeshan";
  age:number = 24;
  salary:number = 100;
  btnColor:string;

  constructor(){
    const colors = ["red","yellow","blue","neon"];
    this.btnColor = "btn "+colors[Math.floor((Math.random() * 5))];
  };
}
