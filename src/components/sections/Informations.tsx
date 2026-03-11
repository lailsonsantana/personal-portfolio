import StudyLog from "../layout/StudyLog";
import SectionTitle from "../ui/SectionTitle";



interface InformationProps{

}

const Information: React.FC<InformationProps> = () => {

    return(
        <section id="informations" className="bg-[#F1F0F2] flex h-full">
            
            <div className="w-full">
                <SectionTitle section="Mais Informações" />

                <div className="mt-4">  
                    <StudyLog />
                </div>
            </div>

        </section>
    )
}

export default Information;
