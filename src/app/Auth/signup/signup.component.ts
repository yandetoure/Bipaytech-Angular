import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule], 
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  registerForm: FormGroup; 

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]], 
      adress: ['', [Validators.required]], 
      phone_number: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(2)]],
      day_of_birth: ['', [Validators.required]], 
      password: ['', [Validators.required, Validators.minLength(6)]], 
    });
  }

  onRegister() {
    if (this.registerForm.valid) {
      const formData = new FormData();
      Object.keys(this.registerForm.value).forEach(key => {
        formData.append(key, this.registerForm.value[key]);
      });
  
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        formData.append('photo', fileInput.files[0]);
      }
  
      this.authService.register(formData).subscribe(
        (response) => {
          console.log(response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      alert('Veuillez remplir le formulaire correctement.');
    }
  }
  
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      // Handle the file as needed (e.g., upload to server or process it)
      console.log(file);
    }
  }
  
}
