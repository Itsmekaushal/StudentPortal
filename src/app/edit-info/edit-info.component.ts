import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // For directives
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-info',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent {
  user: any = {
    address: '123 Main St, Delhi',
    dob: '1990-08-15',
    class: '10th',
    enrolledActivities: 'Basketball, Music Club',
    enrolledCourses: 'Mathematics, Science',
    section: 'A'
  };

  constructor(private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Updated Admin Information:', this.user);
      this.router.navigate(['/info']);
    }
  }
}
