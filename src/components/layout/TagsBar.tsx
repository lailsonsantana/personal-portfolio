import MetaCard from "./MetaCard";

interface TagsBarProps {
    tags: any
}

const TagsBar: React.FC<TagsBarProps> = ({ tags }) => {
    return (

        <aside className="md:col-span-1">
            <div className="sticky top-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-sm uppercase tracking-widest font-bold text-gray-400 mb-6">Tags Populares</h2>
                <div className="space-y-2">
                    {tags.slice(0, 10).map((tag: any) => (
                        <button key={tag.tag} className="w-full flex justify-between items-center group p-2 hover:bg-gray-50 rounded-lg transition-all border border-transparent hover:border-gray-100">
                            <span className="text-gray-600 group-hover:text-blue-600 font-medium text-sm"># {tag.tag}</span>
                            <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-md group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                {tag.count}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </aside>

    );
};


export default TagsBar;