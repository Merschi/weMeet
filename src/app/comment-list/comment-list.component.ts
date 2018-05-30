import { Component, OnInit } from '@angular/core';
import { WmComment } from '../shared/comment';



@Component({
  selector: 'wm-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
	comments : [WmComment]

	constructor() { };

	
	ngOnInit() {
		this.comments = [		
	    new WmComment( 
		"M1",
		"chat1",
		"comment text",
		"10.05.2018 10:43"
	    ),
	    new WmComment(
		"M2", 
		"chat1",
		"comment text zwei",
		"10.05.2018 10:48"
	    )
	    ]; 

	}
}
