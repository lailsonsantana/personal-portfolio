import SectionTitle from "../SectionTitle";
import InfiniteScroll from "../teste/AutomaticRoll";
import Wrappertech from "../wrapper/Wrappertech";

// Implementar o detalhamento das habilidades , ou seja , o que 
// você realmente sabe fazer em cada uma delas

interface SkillsProps{

}

const Skills: React.FC<SkillsProps> = () => {
    return(
        <section id="skills" className="bg-[#010F22] p-4 pt-16 text-white flex flex-col">
            <SectionTitle section="Habilidades"/>

            <div className="grid grid-cols-2 gap-16 lg:grid-cols-4 place-items-center mt-12 font-thin text-lg">
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

            <div className="mt-24">
                <InfiniteScroll />
            </div>
            
            {/* 
            <div className="grid grid-cols-1 lg:grid-cols-4 mt-16 font-bold text-lg text-[#DAFDBA] gap-4">
                <ContainerSkills>
                    <DeveloperModeIcon fontSize="large" />
                    <span>Frontend</span>
                    
                    <div className="flex flex-col items-center justify-center">
                    <div className="w-70 h-70">
                    <img src="front.png" className="opacity-10"/>
                    </div>
                    <ul className="flex mt-4">
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-red-400 border border-red-400">React</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Tailwind</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>CSS</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>HTML</span>
                        </li>
                    </ul>
                    </div>
                </ContainerSkills>

                <ContainerSkills>
                    <StorageIcon fontSize="large"/>
                    <span>Backend</span>
                    <ul >
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Java</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Spring</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Python</span>
                        </li>
                    </ul>
                </ContainerSkills>

                <ContainerSkills>
                    <SettingsApplicationsIcon fontSize="large"  />
                    <span>DevOps</span>
                    <ul >
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Git</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Docker</span>
                        </li>
                    </ul>
                </ContainerSkills>

                <ContainerSkills>
                    <SchoolIcon fontSize="large" />
                    <span>Cursos</span>
                    <ul>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large"  />
                            <span>Inglês</span>
                        </li>
                        <li className="flex items-center gap-1">
                            <ArrowRightIcon fontSize="large" />
                            <span>Spring</span>
                        </li>
                    </ul>
                </ContainerSkills>
            </div>
            */}
        </section>
    )
}

export default Skills;