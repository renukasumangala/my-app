import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

  courseName: string  = "Angular 20";

  constructor(){
    console.log(this.courseName);

    this.courseName = "Angular 20 Tutorial";
    console.log(this.courseName);
  }
}
