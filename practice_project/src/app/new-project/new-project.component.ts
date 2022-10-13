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
  

  // creating a method
  getname(){
    return 'I am batman'
  };
}
