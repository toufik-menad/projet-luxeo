import { Component, OnInit } from '@angular/core';
import {Upnext} from '../upnext';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  upnext: Upnext = {
    name:"Header"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
