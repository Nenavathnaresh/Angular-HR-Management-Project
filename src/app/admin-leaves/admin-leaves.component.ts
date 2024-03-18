import { Component } from '@angular/core';
import { LeavesService } from '../leaves.service';

@Component({
  selector: 'app-admin-leaves',
  templateUrl: './admin-leaves.component.html',
  styleUrl: './admin-leaves.component.css'
})
export class AdminLeavesComponent {

  leaves:any;
  constructor(public ls:LeavesService){}

  ngOnInit(){
    this.getAllLeaves()
  }

  getAllLeaves(){
    this.ls.getAllLeaves().subscribe((res)=>{
      console.log(res);
      this.leaves = res;
    })
  }

  changeStatus(leave:any, status:string){
    let statusChangeConfirm = window.confirm(`Are you sure want to change the status of this leave to ${status}`)
    if(statusChangeConfirm){
      let statusRemarks = prompt('Enter your remarks')
      leave.status = status 
      leave.statusRemarks = statusRemarks

      this.ls.updateLeave(leave.id, leave).subscribe((res)=>{
        alert("leave updated successfully")
        this.getAllLeaves()
      })
    }
    console.log(leave);

  }
}
