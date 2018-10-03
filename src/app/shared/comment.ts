export class Comment {
  private next: Comment;

  constructor(
    public memberRefId: string,
    public chatRefId: string,
    public at: string,
    public text: string
  ) { }
}

