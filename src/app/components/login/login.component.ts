import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}

  login() {
    // aqui você poderia validar email/senha antes
    this.router.navigate(['/dashboard']);
  }
}
