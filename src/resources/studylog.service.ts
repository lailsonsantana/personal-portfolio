import { DataClass } from "./data.resource";
import { StudyLogClass } from "./studylog.resource";

class StudyLogService{

    baseUrl: string = process.env.NEXT_PUBLIC_API_URL + "/api/studylogs";

    async getAlStudyLogs(): Promise<StudyLogClass[]>{

        try{
            const response = await fetch(`${this.baseUrl}`);

            if (!response.ok) {
                console.error(`Erro na resposta: ${response.status} ${response.statusText}`);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: StudyLogClass[] = await response.json();
            return data;
    
        }catch(error){
            throw error;
        }
    }

    async getAllStudyLogsAndCount(): Promise<DataClass>{

        try{
            const response = await fetch(`${this.baseUrl}/studylogs-counter`);

            if (!response.ok) {
                console.error(`Erro na resposta: ${response.status} ${response.statusText}`);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: DataClass = await response.json();
            console.log("CONSOLES")
            console.table(data.counterTagsResponses)
            console.table(data.studyLogResponses)
            return data;
    
        }catch(error){
            throw error;
        }
    }
}

export const useStudyLogService = () => new StudyLogService();