import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-google-oauth2';

  constructor(private router: Router){

  }

  logout() : void{
localStorage.clear();
this.router.navigateByUrl('/login');
  }


  isLoggedIn(): boolean{
   return localStorage.getItem("token") != null;
  }

}
