import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {

  courseName: string = "Angular";


  angularVersion = signal("20");

  courseDuration = signal<string>('2 Months');

  cityList = signal<string[]>(["Pune","Mumbai"]);

  changeDuration() {
    this.courseName = "React js";

    this.courseDuration.set("3 Month");
  }

  addcity(cityName: string) {
   this.cityList.update((old: string[])=> [...old, cityName]);
  }

}
