import { Component } from '@angular/core';

@Component({
  // these are the three ways to use component
  // selector: `apple`,
  // selector: `.apple`,


//   this we create a costume component
  selector: 'my_profile',
  template: "<h2> I'm Profile</h2>",
  styleUrls: ['./profile.component.css']
})

 export class ProfileComponent{

 }