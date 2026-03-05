'use client'

import { StudyLogClass } from "@/service/studylog.resource";
import { getAllStudyLogsAndCount } from "@/service/studylog.service";
import useSWR from "swr"
import LogCard from "./LogCard";
import { useState } from "react";
import TagsCard from "./TagsCard";
import Button from "@mui/material/Button";


interface StudyLogProps {

}

const StudyLog: React.FC<StudyLogProps> = () => {

    const fetcher = (url: string) => fetch(url).then(res => res.json());
    //const { data: studylogs = [] } = useSWR<StudyLogClass[]>('logs', getAllStudyLogsAndCount)
    const { data: studylogs = [] } = useSWR<StudyLogClass[]>("/data/studylogs.json", fetcher);
    const [visibleCount, setVisibleCount] = useState(3);

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

        setVisibleCount((prev) => prev + 3);
    };


    return (
        <>
            <section className="flex flex-col max-w-6xl pb-8 md:pb-16 mx-auto">

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

                <div className="flex flex-col gap-12 h-full">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:col-span-2">
                        {showLogs.map((log) => (
                            <div key={log.id} className="relative group">

                                <LogCard date={log.createdAt} title={log.title} description={log.description} tags={log.tags} />

                            </div>
                        ))}
                    </div>
                </div>


                <div className="flex justify-center items-center rounded-full p-6">

                    {visibleCount < studylogs!.length && (
                        <Button variant="contained" size="small" onClick={handleShowMore}
                            sx={{ backgroundColor: '#010F22', fontFamily: 'var(--font-titillium), sans-serif', color: 'white', borderColor: 'gray', padding: "6px", minWidth: '150px', '&:hover': { borderColor: 'gray.300' } }}
                            className="flex gap-1 m-auto lg:w-1/12">

                            <span>VER MAIS</span>
                        </Button>

                    )}
                </div>

            </section>

            <div className="mt-16 flex justify-center gap-32 w-full mb-32">
                <TagsCard tags={tags} />
            </div>
        </>
    );
}

export default StudyLog;