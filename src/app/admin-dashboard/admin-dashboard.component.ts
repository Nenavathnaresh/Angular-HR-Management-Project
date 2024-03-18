import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  admin:any;
  constructor(public aR: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.aR.queryParams.subscribe((res) => {
      console.log(res);
      this.admin = res;
    })
  }

  empleaves() {
    this.router.navigate(['admindashboard/adminleaves'])
  }

  logout() {
    let logoutConfirm = window.confirm('Are you sure want to logout')
    if (logoutConfirm) {
      this.router.navigate(['/login']);
    }
  }
}
