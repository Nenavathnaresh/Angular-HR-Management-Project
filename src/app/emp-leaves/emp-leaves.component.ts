import { Component, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeavesService } from '../leaves.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-leaves',
  templateUrl: './emp-leaves.component.html',
  styleUrl: './emp-leaves.component.css'
})
export class EmpLeavesComponent {

  currEmp:any;
  leaves:any[] = [];
  leaveForm:FormGroup;
  modalRef?: BsModalRef;
  constructor(public aR:ActivatedRoute, public ls:LeavesService, private modalService: BsModalService, public fb:FormBuilder){
    this.leaveForm = this.fb.group({
      id : ['',Validators.required],
      empid:['',Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required],
      remarks:['',Validators.required],
      status:['waiting',Validators.required],
      statusRemarks:['NA',Validators.required]
    })
  }

  ngOnInit(){
    this.aR.queryParams.subscribe((res)=>{
      this.currEmp = res
      this.leaveForm.controls['empid'].setValue(this.currEmp.id)
      this.getMyLeave()
    })
  }

  getMyLeave(){
    this.ls.getLeavesById(this.currEmp.id).subscribe((res:any)=>{
      // console.log(res);
      this.leaves = res
    })
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  cancel(){
    this.leaveForm.reset()
    this.modalRef?.hide()
  }

  apply(){
    this.ls.addleave(this.leaveForm.value).subscribe((lev)=>{
      console.log(lev);
      this.cancel()
    })
  }
}
