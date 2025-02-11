import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = { firstName: '', lastName: '', dob: '', phone: '', email: '', class: '' };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(form: any) {
    if (!form.valid) {
      this.errorMessage = 'Please fill all fields correctly.';
      return;
    }

    // Reset messages
    this.errorMessage = '';
    this.successMessage = '';

    // Fetch existing users from users.json for duplicate check
    this.http.get('/assets/users.json').subscribe((data: any) => {
      const users = data.users || [];
      const existingUser = users.find((u: any) => u.email === this.user.email);

      if (existingUser) {
        this.errorMessage = 'User already exists with this email.';
      } else {
        this.successMessage = 'Registration Successful! Redirecting...';
        console.log('Registered User:', this.user);

        // Redirect to login page after success
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }
    }, error => {
      console.error('Error fetching user data:', error);
      this.errorMessage = 'Error connecting to server.';
    });
  }
}
