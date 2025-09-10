import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {


  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl(""),
    password: new FormControl(""),
    fullName: new FormControl(""),
    mobileNo: new FormControl(""),
  });

  http = inject(HttpClient);
 userList$: Observable<any[]>;

 constructor() {
  this.userList$ = this.http.get<any[]>("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers");
 }

 onClear() {
  this.userForm.reset()
 }
 onEdit(data: any) {
this.userForm = new FormGroup({
    userId: new FormControl(data.userId),
    emailId: new FormControl(data.emailId),
    password: new FormControl(data.password),
    fullName: new FormControl(data.fullName),
    mobileNo: new FormControl(data.mobileNo),
  });
 }

  onSaveUser() {
    debugger;
    const formValue = this.userForm.value;

    this.http.post("http://api.freeprojectapi.com/api/GoalTracker/register", formValue).subscribe({
      next: (response: any) => {
        alert("User created success")
      },
      error: (error: any) => {
        alert(error)
      }
    })

  }

}
