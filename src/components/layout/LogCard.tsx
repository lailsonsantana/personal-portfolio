interface LogCardProps{
    date: Date
    title: string
    description: string
    tags: string[]
}

const LogCard: React.FC<LogCardProps> = ({date, title, description, tags}) => {
    return (
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
      
      {/* 1. Topo: Data e Título */}
      <div className="mb-2">
        <span className="text-xs text-gray-500 font-mono">{new Date(date).toLocaleDateString("pt-BR")}</span>
        <h3 className="text-lg font-bold text-[#2C5159] mt-1 line-clamp-1">
          {title}
        </h3>
      </div>

      {/* 2. Meio: Descrição (O segredo está no flex-grow) */}
      <div className="flex mb-4">
        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>
      </div>

      {/* 3. Rodapé: Tags (Sempre empurradas para o fundo) */}
      <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs bg-[#F2F2F2] rounded text-[#2C5159]">
            {tag}
          </span>
        ))}
      </div>
      
    </div>
  );
}

export default LogCard;