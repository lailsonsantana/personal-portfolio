'use client'

import { StudyLogClass } from "@/service/studylog.resource";
import { getAllStudyLogsAndCount } from "@/service/studylog.service";
import  useSWR from "swr"
import LogCard from "./LogCard";
import { useState } from "react";
import TagsCard from "./TagsCard";
import MetaCard from "./MetaCard";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface StudyLogProps {

}

const StudyLog: React.FC<StudyLogProps> = () => {
    
    const {data: studylogs = []} = useSWR<StudyLogClass[]>('logs' , getAllStudyLogsAndCount)
    const [visibleCount, setVisibleCount] = useState(3);
    const [showMeta, setShowMeta] = useState(true);


    const tagsCount = studylogs
    .flatMap(log => log.tags) 
    .reduce<Record<string, number>>((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
    }, {});

    const tags = Object.entries(tagsCount)
    .map(([tag, count]) => ({
        tag,
        count
    }))
    .sort((a, b) => b.count - a.count);

    const showLogs = studylogs!.slice(0, visibleCount);
    

    const handleShowMore = () => {
        setShowMeta(false);
        setVisibleCount((prev) => prev + 3);
    };


    
    return (
        <>
        <section className="flex flex-col max-w-6xl  pb-8 md:pb-16 mx-auto mb-8">

            <div className="flex mb-8 rounded-2xl p-4">
                <div className="flex items-start justify-between">
                    <div className="ml-2">
                        <span className="flex gap-4 items-center ">
                            {/*<img className="w-6 h-6" src="info.png"/>*/}
                            <h2 className="text-3xl font-mono text-gray-90">
                                Diário de Bordo Técnico
                            </h2>
                        </span>
                        <p className="mt-4 max-w-xl text-gray-600">
                            Registro cronológico de estudos, projetos e experimentos técnicos.
                        </p>
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:col-span-2">
                  {showLogs.map((log) => (
                    <div key={log.id} className="relative group ml-4 mr-4">


                        <LogCard date={log.createdAt} title={log.title} description={log.description} tags={log.tags}/>

                    </div>
                    ))}  
                </div>

            </div>
            

            <div className="flex justify-center items-center rounded-full p-6">
                        
                        {visibleCount < studylogs!.length && (
                            <button
                                onClick={handleShowMore}
                                className="w-1/12 py-1.5 rounded-sm   hover:bg-gray-200 text-gray-900 font-extrabold  border-1 border-gray-400 transition-colors duration-300"
                            >

                             VER MAIS
                                
                            </button>
                        )}
            </div>

            
            <div className="mt-16 flex justify-center gap-32">
                <TagsCard tags={tags}/>
                
            </div>
    
        </section>

        
        </>
    );
}

export default StudyLog;