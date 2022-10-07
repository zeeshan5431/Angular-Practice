import { Component } from '@angular/core';

@Component({
  // these are the three ways to use component
  // selector: `apple`,
  // selector: `.apple`,
  selector: '[apple]',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})

 export class AppComponent{

 }