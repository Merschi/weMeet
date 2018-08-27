export class Comment {
	constructor(
		public memberRefId: string,
		public chatRefId: string,
		public at: string,
		public text : string,
		public next: Comment 
	){}

}
