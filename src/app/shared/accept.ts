
export class Accept {

  constructor(
    public memberRefId: string,
    public meetChatRefId: string,
    public meetDate: string,
    public level: Accept.level
  ) { }
}

export namespace Accept {
  export enum level { Yes, Maybe, No }
}
