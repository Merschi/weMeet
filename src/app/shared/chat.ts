export class Chat {
	constructor(
	public id: string,
        public groupRefId: string,
        public subject: string,
	public firstComment: Comment
    ) {}
}
