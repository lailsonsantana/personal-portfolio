import SectionTitle from "../ui/SectionTitle";
import StudyLog from "../layout/StudyLog";
import StudyLog1 from "../layout/StudyLog1";


interface InformationProps{

}

const Information: React.FC<InformationProps> = () => {

    return(
        <section id="informations" className="bg-[#F1F0F2] flex h-full">
            
            <div className="w-full">
                <SectionTitle section="Mais Informações" />

                <div className="mt-8 h-2/5">  
                    <StudyLog1 />
                </div>
            </div>

        </section>
    )
}

export default Information;
