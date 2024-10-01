import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getGoogleRedirecturl() {
    return this.http.get(environment.apiBaseUrl + "/api/auth/redirect/google-login")
  }


  getProfileData() {
    return this.http.get(environment.apiBaseUrl + "/api/profile")
  }

  loginWithGoogel(payload: any) {
    return this.http.post(environment.apiBaseUrl + "/api/auth/login/google", payload)
  }


  signup(payload: any) {
    return this.http.post(environment.apiBaseUrl + "/api/auth/signup", payload)
  }

  signin(payload: any) {
    return this.http.post(environment.apiBaseUrl + "/api/auth/login", payload)
  }

}
