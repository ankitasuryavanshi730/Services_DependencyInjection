import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

student:any;

constructor(private common:CommonService){

  this.student = common.students;
}

ngOnIt(): void{

  let difference = this.common.calculateage(new Date(), new Date())
}

}
