import { Component } from '@angular/core';
import { isReactive } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  //string , number, boolean, date

  courseName: string  = "Angular 20";

  isActive: boolean= false;
  currentDate: Date = new Date();

  rollNo: number = 222;

  constructor(){
    console.log(this.courseName);

    this.courseName = "Angular 20 Tutorial";
    console.log(this.courseName);

    //this.courseName = "123";
  }
}
