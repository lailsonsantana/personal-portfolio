'use client'

import { StudyLogClass } from "@/service/studylog.resource";
import useSWR from "swr"

import { useState } from "react";
import TagsCard from "./TagsBar";
import Button from "@mui/material/Button";

import LogCard from "./LogCard";
import TagsBar from "./TagsBar";


interface StudyLog1Props {

}
const StudyLog1: React.FC<StudyLog1Props> = () => {

    const fetcher = (url: string) => fetch(url).then(res => res.json());
    //const { data: studylogs = [] } = useSWR<StudyLogClass[]>('logs', getAllStudyLogsAndCount)
    const { data: studylogs = [] } = useSWR<StudyLogClass[]>("/data/studylogs.json", fetcher);
    const [visibleCount, setVisibleCount] = useState(4);

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

        setVisibleCount((prev) => prev + 2);
    };


    return (
        <div className="flex flex-col min-h-screen bg-[#F1F0F2] p-6 md:p-12 font-sans mb-12">

            <div className="mx-auto mb-8 rounded-2xl p-4">
                <div className="flex items-start justify-center">
                    <div className="flex flex-col items-center justify-center ml-2">
                        <span className="flex gap-4 items-center ">
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

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">


                <TagsBar tags = {tags}/>

                <main className="md:col-span-3 space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {showLogs.map((log) => (
                            <LogCard id={log.id} date={log.createdAt} title={log.title} description={log.description} tags={log.tags} />
                        ))}
                    </div>


                    <div className="flex justify-center pt-4">
                        <button
                            className="px-8 py-3 bg-[#F1F0F2] border border-[#010D26] text-gray-600 font-semibold rounded-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all shadow-sm active:scale-95"
                            onClick={() => handleShowMore()}
                        >
                            Carregar mais 
                        </button>
                    </div>
                </main>

            </div>
        </div>
    );
};

export default StudyLog1;