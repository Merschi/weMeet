import { Component, OnInit } from '@angular/core';
import { Member } from '../shared/member';


@Component({
  selector: 'wm-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {

  private members: Member[] = [];

  constructor() { }

  ngOnInit() {
    console.log('OnInit');
    this.members.push(
      new Member(
        'member_01',
        'Ludger',
        'Lude@example.com',
        'Doko'));
    this.members.push(
      new Member(
        'member_02',
        'Rainer',
        'Rainer@example.com',
        'Doko'
      ));
      this.members.push(
        new Member(
          'member_03',
          'Stephan',
          'Stephan@example.com',
          'Doko'
        )
      );
  }

}
