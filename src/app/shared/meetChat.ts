export class MeetChat extends Chat {
	constructor(
		id: string,
		groupRefId: string,
		subject: string,
		firstComment: commentRefId = ""
		public proposedDates: string[],
		public acceptances: accept[],
    ) {}
}
