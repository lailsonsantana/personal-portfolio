export class StudyLogClass{
    id: number
    createdAt: Date;
    title: string;
    description: string;
    tags: string[];

    constructor(id: number, date: Date, title: string, description: string, tags: string[]){
        this.id = id
        this.createdAt = date;
        this.title = title;
        this.description = description;
        this.tags = tags;
    }
}