import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  user = {
    firstName: 'Amit',
    lastName: 'Kumar',
    dob: '1990-08-15',
    phone: '9876543210',
    email: 'amit.kumar@example.com',
    class: '10th',
    role: 'Student',
    profileImage: ''
  };

  selectedFile: File | null = null;
  private apiUrl = 'http://localhost:5000/api/users'; // Backend API URL

  constructor(private http: HttpClient) {}

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  uploadImage() {
    if (!this.selectedFile) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('profileImage', this.selectedFile);

    this.http.post(`${this.apiUrl}/upload-profile`, formData).subscribe(
      (response: any) => {
        console.log('Image Uploaded:', response);
        this.user.profileImage = response.fileName;
      },
      (error) => console.error(error)
    );
  }
}
