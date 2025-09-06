import { Component } from '@angular/core';
import { isReactive } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  //string , number, boolean, date

  courseName: string  = "Angular 20";

  isActive: boolean= false;
  currentDate: Date = new Date();

  rollNo: number = 222;

  minTestLength = 12;
  spanClassName = 'secondary'

  constructor(){
    console.log(this.courseName);

    this.courseName = "Angular 20 Tutorial";
    console.log(this.courseName);

    setTimeout(() => {
      this.rollNo = 7777;
    }, 10000);
  }


    showAlert() {
      alert("welcome to Angular 20")
    }
  }

