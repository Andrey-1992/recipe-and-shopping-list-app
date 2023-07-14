import { Component, ComponentFactory, ComponentFactoryResolver } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AlertComponent } from "../shared/alert/alert.component";
import { AuthService , AuthResponseData} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  constructor(
    private authService: AuthService, 
    private router: Router,
    private componentFactoryResolver:ComponentFactoryResolver
  ) {}

  isLoginMode = true;
  isLoading = false;
  error : string  = null;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    // console.log(form.value);
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObj: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObj = this.authService.login(email, password)
    } else {
      authObj = this.authService.signup(email, password)
    }

    authObj.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);  
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
  }

};