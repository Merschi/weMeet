export class Comment {
  next: Comment;

  constructor(
    public memberRefId: string,
    public chatRefId: string,
    public at: string,
    public text: string
  ) { }
}

