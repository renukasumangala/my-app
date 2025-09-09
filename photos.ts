import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-photos',
  imports: [FormsModule],
  templateUrl: './photos.html',
  styleUrl: './photos.css'
})
export class Photos implements OnInit {

  photosList: any[] = [];
  http = inject(HttpClient);
  newPhoto: any = {
    "albumId": 0,
    "id": 0,
    "title": "",
    "url": "",
    "thumbnailUrl": ""
  }

  //constructor(private http: HttpClient){

  //  }
  ngOnInit(): void {

    this.getAllPhotos();
  }

  getAllPhotos() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((result: any) => {
      debugger;
      this.photosList = result;
    })
  }

  onSavePhoto() {
    debugger;
    this.http.post("https://jsonplaceholder.typicode.com/photos", this.newPhoto).subscribe((response: any) => {
      alert("API call Success")
      debugger;
      this.getAllPhotos();
    })
  }

  onUpdatePhoto() {
    this.http.put("https://jsonplaceholder.typicode.com/photos/" + this.newPhoto.id, this.newPhoto).subscribe((response: any) => {
      alert("API call Success")
      debugger;
      this.getAllPhotos();
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you Sure want to Delete");
    if (isDelete == true) {
      this.http.delete("https://jsonplaceholder.typicode.com/photos/" + this.newPhoto.id).subscribe((response: any) => {
        alert("API call Success")
        debugger;
        this.getAllPhotos();
      })
    }

  }
  onEdit(data: any) {
    this.newPhoto = data;
  }
}
