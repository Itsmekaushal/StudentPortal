import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

  previewUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file (JPG, JPEG, PNG)');
    }
  }
}
