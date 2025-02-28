import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

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
    role: 'Student'
  };

  previewUrl: string | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert("Only image files are allowed!");
    }
  }
}
