import MetaCard from "./MetaCard";

interface TagsCardProps {
    tags: any
}

const TagsCard: React.FC<TagsCardProps> = ({tags}) => {
    return(
        <div className="flex flex-col md:flex-row md:w-3/4 justify-between items-baseline bg-linear-to-r from-[#010F22] to-[#080121] rounded-md p-4 pl-8 pr-8 pb-8 gap-8 ml-4 mr-4">
            <div className="w-full md:w-2/5">
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
            
            <div className="flex flex-col justify-between md:w-2/5 p-4 text-white">
                <span className="flex items-center mb-6 gap-2">
                    <img className="w-7 h-7" src="meta.png"/>
                    <h3 className="text-lg font-semibold">Meta Atual</h3>
                </span>
                
                <p className="text-indigo-100 text-sm mb-4">
                    Finalizar o curso e obter a certificação MongoDB
                </p>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm">Progresso</span>
                    <span className="text-sm font-semibold">1%</span>
                </div>
                
                <div className="mt-2 w-full bg-indigo-400 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-1/12"></div>
                </div>
            </div>
            
        </div>
    );
}


export default TagsCard;