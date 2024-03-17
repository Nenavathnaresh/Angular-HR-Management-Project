import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeavesService } from '../leaves.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup
  constructor(private fb:FormBuilder, private ls:LeavesService, public router:Router){
    this.loginForm = fb.group({
      id : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  login(){
    this.ls.empAuth(this.loginForm.value).subscribe((res:any)=>{
      // console.log(res);
      if(res.length > 0){
        if(res[0].role === 'admin'){
            this.router.navigate(['/admindashboard'],{queryParams:res[0]})
        }
        if(res[0].role === 'emp'){
          this.router.navigate(['/empdashboard'],{queryParams:res[0]})
        }
      }
      else{
        alert("Enter valid credentials")
      }
    })
  }
}
