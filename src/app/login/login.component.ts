import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data = "your perfect banking partner"
  data1 = "Enter Your ACC Number"

  //acno=""
  // or
  // acno: any
  // psw: any

  userDetails : any= {
    1000: { username: "anu", acno: 1000, password: "abc123", balance: 0 },
    1001: { username: "anu", acno: 1001, password: "abc123", balance: 0 },
    1002: { username: "anu", acno: 1002, password: "abc123", balance: 0 },
    1003: { username: "anu", acno: 1003, password: "abc123", balance: 0 },

  }

//   login() {
//   var acnum=this.acno
//   var psw=this.psw
//   var userDetails=this.userDetails
//   if(acnum in userDetails){
// if(psw==userDetails[acnum]["password"]){
//   alert('login success')
// }
// else{
//   alert('incurrect password')
// }
//   }
//   else{
//     alert('incurrect acc number')
//   }

//   }

  // acnoChange(event: any) {
  //   this.acno = event.target.value
  //   console.log(this.acno);


  // }
  // passChange(event:any){
  //   this.psw= event.target.value
  //   console.log(this.psw);
    
  // }


  login(acnum:any,psw:any) {
    var acnum=acnum.value
    var psw=psw.value
    var userDetails=this.userDetails
    if(acnum in userDetails){
  if(psw==userDetails[acnum]["password"]){
    alert('login success')
  }
  else{
    alert('incurrect password')
  }
    }
    else{
      alert('incurrect acc number')
    }
  
    }




}
