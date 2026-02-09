'use client'

import { DataClass } from "@/resources/data.resource";
import { useStudyLogService } from "@/resources/studylog.service";
import { useEffect, useState } from "react";

interface StudyLogProps {

}

const StudyLog: React.FC<StudyLogProps> = () => {

    const useStudyLog = useStudyLogService();
	const [data, setData] = useState<DataClass | null>(null);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
		searchLogsAndCounters();
	}, []);

    if (!hasMounted) {
        return null;
    }


    async function searchLogsAndCounters() {
        const response: DataClass = await useStudyLog.getAllStudyLogsAndCount();
		setData(response);
        console.table(response.studyLogResponses)
        console.table(response.counterTagsResponses)
    }

    
    return (
        <section className="max-w-6xl mx-auto">
            <div className="mb-16">
            <div className="flex items-start justify-between">
                <div>
                <h2 className="text-3xl font-bold text-gray-900">
                    📚 Diário de Bordo Técnico
                </h2>
                <p className="mt-4 max-w-xl text-gray-600">
                    Registro cronológico de estudos, projetos e experimentos técnicos.
                </p>
                </div>
            </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Timeline principal */}
            <div className="space-y-6">
                {data?.studyLogResponses.slice(0, 3).map((log) => (
                <div key={log.createdAt} className="relative pl-12 group">
                    {/* Linha vertical e ponto */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#3C360A] via-[#918848] to-transparent"></div>
                    <div className="absolute left-[-4px] top-0">
                    <div className="h-3 w-3 rounded-full bg-[#2C5159] ring-4 ring-white transition-transform group-hover:scale-150" />
                    </div>

                    {/* Card do log */}
                    <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2C5159]">
                    <div className="flex items-start justify-between mb-3">
                        <time className="text-sm font-medium text-gray-500">
                        {log.createdAt}
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
                <div className="bg-gradient-to-r from-[#010421] to-[#2B3276] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">🎯 Meta Atual</h3>
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
                <div className="bg-gradient-to-r from-[#010421] to-[#2B3276] rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="flex items-center text-lg font-semibold text-white mb-4 gap-2">
                    <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                    </svg>
                    <span>Tags mais frequentes</span>
                </h3>

                <div className="space-y-3">
                    {data?.counterTagsResponses?.slice(0, 5).map((item) => (
                        <div
                        key={item.tag}
                        className="flex items-center justify-between p-3 rounded-lg transition-colors"
                        >
                        <span className="text-white">{item.tag}</span>
                        <span className="text-xs text-white">
                            {item.count} ocorrência{item.count > 1 ? 's' : ''}
                        </span>
                        </div>
                    ))}
                </div>

                

                </div>

                {/* Call to action */}
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