import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrl: './emp-dashboard.component.css'
})
export class EmpDashboardComponent {

  currEmp:any
  constructor(private aR:ActivatedRoute, private router:Router){}

  ngOnInit(){
    this.aR.queryParams.subscribe((res)=>{
      // console.log(res);
      this.currEmp = res
    })
  }

  empleaves(){
    // alert('hii')
    this.router.navigate(['empdashboard/empleaves'],{queryParams:this.currEmp})
  }

  logout(){
    let logoutConfirm = window.confirm('Are you sure want to logout')
    if(logoutConfirm){
    this.router.navigate(['/login']);
    }
  }
}
