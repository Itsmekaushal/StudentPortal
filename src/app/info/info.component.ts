import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info',
  standalone: true,
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
    role: 'Student'
  };

  selectedFile: File | null = null;
  previewUrl: string | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.selectedFile = file;

      // Image preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file');
      this.selectedFile = null;
    }
  }

  uploadFile() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('profileImage', this.selectedFile);

    this.http.post<{ imageUrl: string }>('http://localhost:5000/upload', formData)
      .subscribe(response => {
        this.previewUrl = response.imageUrl;
      });
  }
}
