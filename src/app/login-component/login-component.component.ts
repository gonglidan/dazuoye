import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(private authService: AuthService) {
  }

  login() {
    this.authService.login();
  }
}




