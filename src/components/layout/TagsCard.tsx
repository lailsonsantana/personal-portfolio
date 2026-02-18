import MetaCard from "./MetaCard";

interface TagsCardProps {
    tags: any
}

const TagsCard: React.FC<TagsCardProps> = ({tags}) => {
    return(
        
        <div className="flex justify-between items-baseline bg-linear-to-r from-[#010421] to-[#333] rounded-md  p-4 pb-8 pl-8 pr-8">
            <div className="w-2/5">
                <span className="flex items-center gap-2 mb-6">
                    <img className="w-7 h-7" src="tend.png" alt="tags icon"/>
                    <h3 className="text-lg font-semibold text-white">
                        Tags mais frequentes
                    </h3>
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                    {tags.slice(0, 5).map((item: any) => (
                        <div
                            key={item.tag}
                            className="flex justify-between gap-2 bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 transition-colors"
                        >
                            <span className="text-white text-sm">
                                {item.tag}
                            </span>
                            <span className="text-xs text-white/70 bg-white/20 px-2 py-0.5 rounded-full">
                                {item.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col justify-between p-4 text-white w-2/5">
                <span className="flex items-center mb-4 gap-2">
                    <img className="w-7 h-7" src="meta.png"/>
                    <h3 className="text-lg font-semibold">Meta Atual</h3>
                </span>
                
                <p className="text-indigo-100 text-sm mb-4">
                    Desenvolver um projeto full-stack completo com React, Spring Boot e PostgreSQL
                </p>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm">Progresso</span>
                    <span className="text-sm font-semibold">65%</span>
                </div>
                
                <div className="mt-2 w-full bg-indigo-400 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-3/5"></div>
                </div>
            </div>

        </div>
     
    )
}

export default TagsCard;