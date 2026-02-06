import SectionTitle from "../SectionTitle";
import CodePresentation from "../CodePresentation";
import DescriptionCode from "../DescriptionCode";

interface AboutProps{

}

const full = 
    `const dev = {
        name: "Lailson",
        age: "26",
        city: "Vitória da Conquista-BA"
        graduation: "Computer Sciente",
        skills: [
            "Java",
            "Spring Boot",
            "React", 
            "Next.js", 
            "TypeScript"
            "Python"
        ],
        languages: [
            "Portuguese - Native", 
            "English - Intermediate"
        ]
};`

const description = `Sou graduado em Ciência da Computação, com atuação direcionada ao desenvolvimento de APIs REST utilizando a linguagem Java e o framework Spring Boot . Busco desenvolver soluções focadas na utilização de boas práticas, padrões de projeto,
 arquiteturas consolidadas e frameworks/bibliotecas com grande aceitação na comunidade.`


const About: React.FC<AboutProps> = () => {
    return(
        <section id="about" className="bg-[#E6E5DE] p-4 lg:p-8 text-black flex flex-col">
            <SectionTitle section="Sobre"/>

            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
                    
                <DescriptionCode text={description} />

                <CodePresentation fullCode={full}/>
                
            </div>

        </section>
    )
}

export default About;