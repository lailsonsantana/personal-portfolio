import SectionTitle from "../ui/SectionTitle";
import StudyLog from "../layout/StudyLog";


interface InformationProps{

}

const Information: React.FC<InformationProps> = () => {

    return(
        <section id="Information" className="bg-[#F1F0F2]">
 
            <SectionTitle section="Mais Informações" />

            <div className="mt-8">  
                <StudyLog />
            </div>

        </section>
    )
}

export default Information;
