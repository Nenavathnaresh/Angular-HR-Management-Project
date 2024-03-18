import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeavesService {
empApi = 'http://localhost:3000/employee';

leaveApi = 'http://localhost:3000/leaves';

  constructor(public http:HttpClient) { }

  ngOnInit(){}

  addemp(emp:any){
    return  this.http.post(this.empApi, emp);
  }

  empAuth(emp:any){
    return this.http.get(`${this.empApi}?id=${emp.id}&password=${emp.password}`)
  }

  getLeavesById(id:any){
    return this.http.get(`${this.leaveApi}?empid=${id}`);
  }

  addleave(lev:any){
    return this.http.post(this.leaveApi,lev); 
  }

  getAllLeaves(){
    return this.http.get(this.leaveApi);
  }

  updateLeave(id:any, leave:any){
    return this.http.put(`${this.leaveApi}/${id}`, leave);
  }
}
