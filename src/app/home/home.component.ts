import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedRole: string = 'student';

  constructor(private router: Router) {}

  onProceed(): void {
    if (this.selectedRole === 'admin') {
      // Redirect to login page with role=admin
      this.router.navigate(['/login'], { queryParams: { role: 'admin' } });
    } else {
      // Redirect to registration page with role=student
      this.router.navigate(['/register'], { queryParams: { role: 'student' } });
    }
  }
}
