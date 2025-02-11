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
}
