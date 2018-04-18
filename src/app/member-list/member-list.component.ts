import { Component, OnInit } from '@angular/core';
import { Member } from '../shared/member';


@Component({
  selector: 'wm-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {
  
  members:[Member];

  constructor() { };
 
   ngOnInit() {
   console.log("OnInit");
    this.members = [
        new Member( "Ludger",
                    "Ludger.Otte@telekom.de",
                    "Doko"
                  ),
        new Member( "Rainer",
                    "Rainer.Mense@brillux.de",
                    "Doko"
                  )
     ];
  }

}
