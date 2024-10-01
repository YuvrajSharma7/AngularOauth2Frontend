import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData: any = {
    email: "",
    password: ""
  };

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    /*
     * if jwt token is already saved in local stoarge go to profile page
    */
    if (localStorage.getItem("token") != null && localStorage.getItem("token") != "") {
      this.router.navigateByUrl('/profile');
    }
  }

  loginWithGoogle() {
    this.appService.getGoogleRedirecturl().subscribe((response: any) => {
      if (response != null && response.url != null) {
        window.location.href = response.url;
      }
    }, (error) => {
      console.error(error);
    });
  }

  signIn(signinData: any): void {
    this.appService.signin(signinData).subscribe((response: any) => {
      if (response != null) {
        localStorage.setItem("token", response.token);
        this.router.navigateByUrl('/profile');
      }
    }, (error) => {
      console.error(error);
    });
  }

}
