import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'info', component: InfoComponent },
  { path: 'editinfo', component: EditInfoComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent }
];
