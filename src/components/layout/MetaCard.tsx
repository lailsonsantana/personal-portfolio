interface MetaCardProps{

}

const MetaCard: React.FC<MetaCardProps> = () => {
    return(
        <div className="bg-linear-to-r from-[#010421] to-[#2B3276] rounded-md p-8 text-white ml-4 mr-4 w-1/3">
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
    )
}

export default MetaCard;