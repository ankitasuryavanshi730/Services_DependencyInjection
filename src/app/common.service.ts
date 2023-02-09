import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  students = [
    {rollNO:1, Name:"Ankita", Surname:"Suryavanshi",email:"ankita@gmail.com",mobNO:123456789},
    {rollNO:2, Name:"Amruta", Surname:"Yadav",email:"amruta@gmail.com",mobNO:123456789},
    {rollNO:3, Name:"Aishwarya", Surname:"Kumbhar",email:"aishwarya@gmail.com",mobNO:123456789},
    {rollNO:4, Name:"Prajakta", Surname:"Chavan",email:"prajakta@gmail.com",mobNO:123456789},
    {rollNO:5, Name:"Smita", Surname:"Jadhav",email:"smita@gmail.com",mobNO:123456789},
    {rollNO:6, Name:"Aarati", Surname:"Kagale",email:"aarti@gmail.com",mobNO:123456789},
    {rollNO:7, Name:"Shilpa", Surname:"Ashtage",email:"shilpa@gmail.com",mobNO:123456789},
    {rollNO:8, Name:"Pooja", Surname:"Hujare",email:"pooja@gmail.com",mobNO:123456789}


  ]


  constructor() { }

  calculateage(todayDate:Date, birthdayDate:Date):number{

    let difference = 0;

    return difference;
  }
}
