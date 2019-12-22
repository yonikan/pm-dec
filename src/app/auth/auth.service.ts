import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LocalStorageService } from '../core/services/local-storage.service';
import { AuthorizationService } from '../core/services/authorization.service';
import { MatDialog } from '@angular/material';
import { UserLogin } from './user-login.model';
import { ServerEnvService } from '../core/services/server-env.service';
import { LOGIN_DATA } from 'server/data/login.data';

@Injectable({
   providedIn: 'root' 
})
export class AuthService {
  private token = null;
  private isAuthenticated = false;
  private authStatusListener = new BehaviorSubject<boolean>(false);
  private userLoginData: UserLogin;
  private userLoginDataListener = new BehaviorSubject<any>({});

  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService,
    private authorizationService: AuthorizationService,
    private dialog: MatDialog,
    private serverEnvService: ServerEnvService
  ) {}

  getToken(): string {
    return this.token;
  }

  getIsAuth(): boolean {
    return this.isAuthenticated;
  }

  getAuthStatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable();
  }

  setIsAuth(isAuthenticated) {
    this.isAuthenticated = isAuthenticated;
    this.authStatusListener.next(isAuthenticated);
  }

  getUserLoginData(): UserLogin {
    return this.userLoginData;
  }

  getUserLoginDataListener(): Observable<UserLogin> {
    return this.userLoginDataListener.asObservable();
  }

  fetchUserLoginData(email: string, password: string): Observable<UserLogin> {
    const PATH = this.serverEnvService.getBaseUrl();
    const USER_DATA = {
      email,
      password
    };
    return this.http.post<any>(`${PATH}/account/login`, USER_DATA);
    // return of(LOGIN_DATA);
  }

  login(email: string, password: string) {
    this.fetchUserLoginData(email, password)
      // .pipe(
      //   tap((loginData: any) => console.log(loginData)),
      // )
      // .pipe(
      //   map((loginData: any) => loginData.payload),
      // )
      .subscribe(
        (userLoginDataResponse: UserLogin) => {
          if (userLoginDataResponse.token) {
            this.userLoginData = userLoginDataResponse;
            this.userLoginDataListener.next(userLoginDataResponse);
            this.authorizationService.allowedFeatures = userLoginDataResponse.features;
            this.token = userLoginDataResponse.token;
            this.localStorageService.storeOnCookie('token', this.token);
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            this.router.navigate(['team-event-validation/training/1']);
            // this.router.navigate(['team-event-validation/match/1']);
          }
        },
        (error) => {
          this.isAuthenticated = false;
          this.authStatusListener.next(false);
        }
      );
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['login']);
  }

  postForgotPassword(email: string): Observable<any> {
    const PATH = this.serverEnvService.getBaseUrl();
    const USER_DATA = {
      email
    };
    return this.http.post<any>(`${PATH}/account/forgot-password`, USER_DATA);
  }

  forgotPassword(email: string) {
    this.postForgotPassword(email)
     .subscribe((results: any) => { 
       console.log(results)
     });
  }

  postResetPassword(password: string, repeatedPassword: string): Observable<any> {
    const PATH = this.serverEnvService.getBaseUrl();
    const USER_DATA = {
      password,
      repeatedPassword
    };
    return this.http.post<any>(`${PATH}/account/reset-password`, USER_DATA);
  }

  resetPassword(password: string, repeatPassword: string) {
    this.postResetPassword(password, repeatPassword)
      .subscribe((results: any) => {
        //  console.log(results)
      });
  }

  postSetPassword(token: string, password: string): Observable<any> {
    const PATH = this.serverEnvService.getBaseUrl();
    const USER_DATA = {
      token,
      password
    };
    return this.http.post<any>(`${PATH}/account/set-password`, USER_DATA);
  }

  setPassword(token: string, password: string) {
    this.postSetPassword(token, password)
      .subscribe((results: any) => {
         console.log(results)
      });
  }
}
