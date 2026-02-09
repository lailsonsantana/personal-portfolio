import { CountTagsClass } from "./counttags.resource";
import { StudyLogClass } from "./studylog.resource";

export class DataClass{
    counterTagsResponses: CountTagsClass[];
    studyLogResponses: StudyLogClass[];

    constructor(countTags: CountTagsClass[], studyLogs: StudyLogClass[]){
        this.counterTagsResponses = countTags;
        this.studyLogResponses = studyLogs;
    }
}