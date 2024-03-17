import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  constructor(public aR:ActivatedRoute){}

  ngOnInit(){
    this.aR.queryParams.subscribe((res)=>{
      console.log(res); 
    })
  }
}
