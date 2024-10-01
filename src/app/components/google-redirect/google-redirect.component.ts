import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleLogin } from 'src/app/dtos/google-login';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-google-redirect',
  templateUrl: './google-redirect.component.html',
  styleUrls: ['./google-redirect.component.css']
})
export class GoogleRedirectComponent implements OnInit {
public temporary_grant: string ="";
  constructor(private route: ActivatedRoute, private router: Router,private appService: AppService) { }

  ngOnInit(): void {
    let temporaryGrant = this.route.snapshot.queryParams['code'];
    if(!temporaryGrant){
this.router.navigateByUrl('/login');
    }
    this.temporary_grant=temporaryGrant;
    // prepare the request body / dto
     let dto:GoogleLogin = new GoogleLogin();
     dto.tempGrant=temporaryGrant;
     // call login with google api on our backend server
     this.appService.loginWithGoogel(dto).subscribe((response: any)=>{
     if(response != null && response['token'] != null){
      // set the token in localstorage 
     localStorage.setItem("token",response["token"]);
     //go to profile page
     this.router.navigateByUrl('/profile');
     }
     },(error) => {
console.error("Authentication failed");
this.router.navigateByUrl('/login');
     });

  }

}
