import React, { useState } from 'react';

interface LogCard1Props {
	date: Date
	title: string
	description: string
	tags: string[]
}

const LogCard1: React.FC<LogCard1Props> = ({ date, title, description, tags }) =>  {
  // Tags estáticas
  const tagsfrequentes = [
    { nome: 'React', total: 12 },
    { nome: 'TypeScript', total: 8 },
    { nome: 'Tailwind CSS', total: 15 },
    { nome: 'Next.js', total: 5 },
    { nome: 'Node.js', total: 7 },
  ];

  // Cards com campo de Data
  const [cards, setCards] = useState([
    { id: 1, titulo: 'Projeto Alpha', data: '10 Mar 2026', desc: 'Sistema de gestão de tarefas com foco em UX.', tags: ['React', 'Tailwind'] },
    { id: 2, titulo: 'Dashboard Financeiro', data: '05 Mar 2026', desc: 'Visualização de dados complexos em tempo real.', tags: ['TypeScript', 'Next.js'] },
    { id: 3, titulo: 'API Rest', data: '28 Fev 2026', desc: 'Backend performático utilizando arquitetura limpa.', tags: ['Node.js', 'TypeScript'] },
    { id: 4, titulo: 'Site Institucional', data: '20 Fev 2026', desc: 'Página otimizada para SEO e alta conversão.', tags: ['React', 'Tailwind'] },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sidebar: Tags Frequentes */}
        <aside className="md:col-span-1">
          <div className="sticky top-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-6">Tags Populares</h2>
            <div className="space-y-2">
              {tagsfrequentes.map((tag) => (
                <button key={tag.nome} className="w-full flex justify-between items-center group p-2 hover:bg-gray-50 rounded-lg transition-all border border-transparent hover:border-gray-100">
                  <span className="text-gray-600 group-hover:text-blue-600 font-medium text-sm">#{tag.nome}</span>
                  <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {tag.total}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Conteúdo Principal */}
        <main className="md:col-span-3 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card) => (
              <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">{new Date(date).toLocaleDateString("pt-BR")}</span>
                    <div className="flex gap-1">
                      {card.tags.slice(0, 1).map(t => (
                        <div key={t} className="w-2 h-2 rounded-full bg-blue-400"></div>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => (
                    <span key={t} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Botão Ver Mais */}
          <div className="flex justify-center pt-4">
            <button 
              className="px-8 py-3 bg-white border border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all shadow-sm active:scale-95"
              onClick={() => console.log("Carregar mais...")}
            >
              Carregar mais projetos
            </button>
          </div>
        </main>

      </div>
    </div>
  );
};

export default LogCard1;