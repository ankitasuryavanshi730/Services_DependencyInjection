import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent {


  detail:any;

  constructor(private common:CommonService){

    this.detail = common.students;
  }

  ngOnIt(): void{

    let difference = this.common.calculateage(new Date(), new Date())
  }
}
