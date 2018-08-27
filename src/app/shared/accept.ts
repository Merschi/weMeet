

export class Accept {
	constructor(
		public memberRefId: string,
		public meetRefId: string,
		public meetDate: string,
		public meetState: state
	) {}
	
	enum state : {Yes,Maybe,No}
}
