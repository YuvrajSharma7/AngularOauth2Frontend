import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  userData: any = {
    c_password: "",
    email: "",
    name: "",
    password: "",
    phone: ""
  };

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  signUp(signupData : any): void{
    this.appService.signup(signupData).subscribe((response:any) => {
      if(response != null ){
        alert("Signup Successfull, Now Log in to your account");
      }
          },(error) =>{
      console.error(error);
          });
  }

}
