export class StudyLogClass{
    createdAt: string;
    title: string;
    description: string;
    tags: string[];

    constructor(date: string, title: string, description: string, tags: string[]){
        this.createdAt = date;
        this.title = title;
        this.description = description;
        this.tags = tags;
    }
}