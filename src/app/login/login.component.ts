import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  login() {
    this.http.get<any>('assets/users.json').subscribe(data => {
      const loginUsers = data.users;

      const user = loginUsers.find((u: any) => u.username === this.username && u.password === this.password);

      if (user) {
        this.errorMessage = ''; // Error message hatana
        alert(`🎉 Login Successful! Welcome, ${this.username}!`);
      } else {
        this.errorMessage = '❌ Invalid Username or Password!'; // Password ke niche show hoga
      }
    }, error => {
      this.errorMessage = '❌ Error Fetching Data!';
    });
  }
}
