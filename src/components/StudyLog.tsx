interface StudyLogProps {
    
}

const StudyLog: React.FC<StudyLogProps> = () => {
    const logs = [
        {
            id: 1,
            date: "02 Fev 2026",
            title: "Relacionamentos JPA",
            description: "Entendi quando evitar relacionamentos bidirecionais para reduzir acoplamento e complexidade no modelo.",
            tags: ["Spring", "JPA", "Hibernate"],
        },
        {
            id: 2,
            date: "30 Jan 2026",
            title: "DTOs e Records no Java",
            description: "Utilizei Java Records para simplificar DTOs e melhorar a legibilidade da camada de transporte.",
            tags: ["Java", "Spring Boot"],
        },
        {
            id: 3,
            date: "27 Jan 2026",
            title: "Estado controlado no React",
            description: "Implementei controle de seleção única entre múltiplos inputs usando estado centralizado.",
            tags: ["React", "TypeScript"],
        },
    ];



return (
    <section className="max-w-6xl mx-auto">
        <div className="mb-16">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        📚 Diário de Bordo Técnico
                    </h2>
                    <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400">
                        Registro cronológico de aprendizados, decisões e experimentos técnicos.
                    </p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Timeline principal */}
            <div className="space-y-6">
                {logs.map((log) => (
                    <div key={log.id} className="relative pl-12 group">
                        {/* Linha vertical e ponto */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#3C360A] via-[#918848] to-transparent dark:from-indigo-400 dark:via-indigo-600" />
                        <div className="absolute left-[-4px] top-0">
                            <div className="h-3 w-3 rounded-full bg-[#2C5159] dark:bg-indigo-400 ring-4 ring-white dark:ring-gray-900 transition-transform group-hover:scale-150" />
                        </div>

                        {/* Card do log */}
                        <div className=" dark:bg-gray-800 rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#2C5159]  dark:border-gray-700">
                            <div className="flex items-start justify-between mb-3">
                                <time className="text-sm font-medium text- dark:text-gray-400">
                                    {log.date}
                                </time>
                                
                            </div>
                            
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                {log.title}
                            </h3>
                            
                            <p className="text-gray-800 dark:text-gray-400 text-sm mb-4">
                                {log.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-1">
                                {log.tags.map((tag) => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-[#2C5159] text-white dark:bg-gray-700 dark:text-gray-300 rounded">
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

                {/* Card de últimas tecnologias */}
                <div className="bg-gradient-to-r from-[#010421] to-[#2B3276] dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="flex items-center text-lg font-semibold text-white dark:text-gray-100 mb-4 gap-2">
                                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <span>
                                    Tags mais frequentes
                                </span>
                    </h3>
                    <div className="space-y-3">
                        {['Spring Security', 'Docker Compose', 'React Query', 'PostgreSQL'].map((tech) => (
                            <div key={tech} className="flex items-center justify-between p-3 dark:hover:bg-gray-700/50 rounded-lg transition-colors">
                                <span className="text-white dark:text-gray-300">{tech}</span>
                                <span className="text-xs text-white dark:text-gray-400">2 ocorrências</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className="bg-[#F1F0F2] dark:bg-gray-800/50 rounded-xl p-6 dark:border-gray-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        Quer ver mais?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        Acompanhe minha jornada completa de aprendizado e projetos.
                    </p>
                    <button className="w-full py-3 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300">
                        Acessar Diário Completo
                    </button>
                </div>
            </div>
        </div>
    </section>
);
}

export default StudyLog;