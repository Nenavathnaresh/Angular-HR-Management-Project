import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeavesService } from '../leaves.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  register:FormGroup;
  
  constructor(private fb:FormBuilder, private ls:LeavesService,private router:Router){
    this.register = this.fb.group({
      id : ["",Validators.required],
      password : ["", Validators.required],
      role :["emp"] 
    })    
  }
  
  regist(){
    this.ls.addemp(this.register.value).subscribe((res)=>{
      alert("employee added successufully")
      this.router.navigate(['/login'])
    })
  }
}
