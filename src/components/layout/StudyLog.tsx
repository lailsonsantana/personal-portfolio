'use client'

import { StudyLogClass } from "@/service/studylog.resource";
import { getAllStudyLogsAndCount } from "@/service/studylog.service";
import  useSWR from "swr"


interface StudyLogProps {

}

const StudyLog: React.FC<StudyLogProps> = () => {
    
    const {data: studylogs = [], mutate} = useSWR('logs' , getAllStudyLogsAndCount)

    

    const tagsCount = (studylogs!.flatMap(log => log.tags) as string[])
    .reduce<Record<string, number>>((acc, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
    }, {});

    const tags = Object.entries(tagsCount).map(([tag, count]) => ({
        tag,
        count
    }));

    
    return (
        <section className="max-w-6xl mx-auto">
            <div className="mb-16">
            <div className="flex items-start justify-between">
                <div>
                <span className="flex gap-4 items-center">
                    <img className="w-6 h-6" src="info.png"/>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Diário de Bordo Técnico
                    </h2>
                </span>
                <p className="mt-4 max-w-xl text-gray-600">
                    Registro cronológico de estudos, projetos e experimentos técnicos.
                </p>
                </div>
            </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Timeline principal */}
            <div className="space-y-6">
                {studylogs!.slice(0, 3).map((log) => (
                <div key={log.id} className="relative pl-12 group">
                    {/* Linha vertical e ponto */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-[#3C360A] via-[#918848] to-transparent"></div>
                    <div className="absolute -left-1 top-0">
                    <div className="h-3 w-3 rounded-full bg-[#2C5159] ring-4 ring-white transition-transform group-hover:scale-150" />
                    </div>

                    {/* Card do log */}
                    <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2C5159]">
                    <div className="flex items-start justify-between mb-3">
                        <time className="text-sm font-medium text-gray-500">
                        {new Date(log.createdAt).toLocaleDateString("pt-BR")}
                        </time>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {log.title}
                    </h3>

                    <p className="text-gray-800 text-sm mb-4">
                        {log.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                        {log.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-[#2C5159] text-white rounded"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>
                    </div>
                </div>
                ))}
            </div>

            {/* Coluna complementar */}
            <div className="space-y-8">
                {/* Card de meta atual */}
                <div className="bg-linear-to-r from-[#010421] to-[#2B3276] rounded-xl p-6 text-white">
                <span className="flex items-center mb-4 gap-2">
                    <img className="w-7 h-7" src="meta.png"/>
                    <h3 className="text-lg font-semibold">Meta Atual</h3>
                </span>
                
                <p className="text-indigo-100 text-sm mb-4">
                    Desenvolver um projeto full-stack completo com React, Spring Boot e PostgreSQL
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-sm">Progresso</span>
                    <span className="text-sm font-semibold">65%</span>
                </div>
                <div className="mt-2 w-full bg-indigo-400 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-3/5"></div>
                </div>
                </div>

                {/* Card de tags */}
                <div className="bg-linear-to-r from-[#010421] to-[#2B3276] rounded-xl p-6 shadow-sm border border-gray-100">
                <span className="flex items-center gap-2 mb-4">
                    <img className="w-7 h-7" src="tend.png"/>
                    <h3 className="flex items-center text-lg font-semibold text-white">
                        Tags mais frequentes
                    </h3>
                </span>
                

                <div className="space-y-3">
                {tags.slice(0, 5).map((item) => (
                    <div
                    key={item.tag}
                    className="flex items-center justify-between p-3 rounded-lg"
                    >
                    <span className="text-white">{item.tag}</span>
                    <span className="text-xs text-white">
                        {item.count} ocorrência{item.count > 1 ? "s" : ""}
                    </span>
                    </div>
                ))}
                </div>

                </div>


                <div className="bg-[#F1F0F2] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Quer ver mais?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    Acompanhe minha jornada completa de aprendizado e projetos.
                </p>
                <button className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-300">
                    Acessar Diário Completo
                </button>
                </div>
            </div>
            </div>
        </section>
);
}

export default StudyLog;