import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentials ={
    login:'',
    password:''
  }
  public logged?: boolean;
  public logout?: boolean;
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  signIn(){
    return this.authService.authenticate(this.credentials).subscribe((res)=>{
      if(!res){
        this.logged = false;
      } else{
        this.logout = false;
        this.credentials ={
          login:'',
          password:''
        }
        this.router.navigate(['/']);
      }
    })
  }

}
