export class Post {
    constructor(
        public title: string,
        public content: string,
        public loveIts: number,
        // tslint:disable-next-line:variable-name
        public created_at: Date ) {}
     }