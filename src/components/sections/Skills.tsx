import SectionTitle from "../ui/SectionTitle";
import InfiniteScroll from "../layout/AutomaticRoll";
import Wrappertech from "../wrapper/Wrappertech";


interface SkillsProps{

}

const Skills: React.FC<SkillsProps> = () => {
    return(
        <section id="skills" className="bg-[#010F22] pt-16 text-white flex flex-col">
            <SectionTitle section="Habilidades"/>

            <div className="p-4">
                <div className="grid grid-cols-2 gap-16 lg:grid-cols-4 place-items-center mt-12 font-thin text-lg w-full">
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-center mb-4 font-semibold text-2xl">Backend</h1>
                        <Wrappertech>Java</Wrappertech>
                        <Wrappertech>Spring Boot</Wrappertech>
                        <Wrappertech>Python</Wrappertech>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-center mb-4 font-semibold text-2xl">Frontend</h1>
                        <Wrappertech>HTML e CSS</Wrappertech>
                        <Wrappertech>React</Wrappertech>
                        <Wrappertech>Tailwind</Wrappertech>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-center mb-4 font-semibold text-2xl">DevOps</h1>
                        <Wrappertech>Git e GitHub</Wrappertech>
                        <Wrappertech>PostgreSQL</Wrappertech>
                        <Wrappertech>Docker</Wrappertech>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h1 className="text-center mb-4 font-semibold text-2xl">Outros</h1>
                        <Wrappertech>WordPress</Wrappertech>
                        <Wrappertech>Wix</Wrappertech>
                        <Wrappertech>Excel</Wrappertech>
                    </div>
                </div>
            </div>

            <div className="mt-16 mb-8">
                <InfiniteScroll />
            </div>
            
        </section>
    )
}

export default Skills;