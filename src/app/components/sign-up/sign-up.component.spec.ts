import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from "/home/yuvraj/Downloads/Angular-Oauth-Google/src/app/services/user.service";
@Component({
  selector: 'app-sign-up',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userData: any;
  value = "";
  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.currentUserData.subscribe((userData: any) => this.userData = userData)
  }
  signUp(data: any) {

    this.user.changeData(data);
  }

  ngAfterViewInit() {

  }

  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */

  };




}