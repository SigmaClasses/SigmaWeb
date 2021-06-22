import { Component, OnInit } from '@angular/core';


declare function StickMenu(): any; // declaring the function which is there in util.js file 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'sigma-web';



  ngOnInit() {
    StickMenu(); // calling javascript function
  }

}
