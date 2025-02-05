import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';  

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe(
      response => {
      },
      error => {
        console.error('Login error:', error);
        this.errorMessage = 'Erreur de connexion, veuillez vérifier vos identifiants.';
      }
    );
  }
}