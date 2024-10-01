import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public name: string = "";
  public email: string = "";

  constructor(private appService: AppService,private router: Router) { }

  ngOnInit(): void {
      /*
     * if jwt token is not saved in local stoarge clear localstorage and go to login page
    */
      if(localStorage.getItem("token") == null && localStorage.getItem("token") == ""){
        localStorage.clear();
        this.router.navigateByUrl('/login');
      }

      this.getProfileData();
  }


  getProfileData(){
    this.appService.getProfileData().subscribe((response:any) => {
if(response != null && response.name != null){
 this.name=response.name;
}
if(response != null && response.email != null){
  this.email=response.email;
 }
    },(error) =>{
console.error(error);
    });
 }

}
