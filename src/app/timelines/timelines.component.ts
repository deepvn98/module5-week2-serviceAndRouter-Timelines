import { Component, OnInit } from '@angular/core';
import {TimeServiceService} from "../service/time-service.service";

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss']
})
export class TimelinesComponent implements OnInit {
timelines='';
  constructor(private timeline:TimeServiceService) { }

  ngOnInit(): void {
  }

  onchage(value:any){
    this.timelines = this.timeline.getDiffToNow(value)
  }

}
