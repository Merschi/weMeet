export class Comment {
	constructor(
		public memberRefId: string,
		public chatRefId: string,
		public text : string,
		public at: string,
		public nextComment: Comment 
	){}

}
