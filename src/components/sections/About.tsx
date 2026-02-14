import SectionTitle from "../ui/SectionTitle";
import CodePresentation from "../layout/CodePresentation";
import DescriptionCode from "../layout/DescriptionCode";

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


const description = (
  <p className="text-justify m-16">
    Sou graduado em <strong className="text-blue-400">Ciência da Computação</strong>, com atuação direcionada ao desenvolvimento de APIs REST utilizando 
    a linguagem <strong>Java</strong> e o framework <strong>Spring Boot</strong>.
    <br/><br/>
    Busco desenvolver soluções focadas na utilização de <strong>boas práticas</strong>, 
    padrões de projeto, arquiteturas consolidadas e frameworks/bibliotecas com grande aceitação na comunidade.
  </p>
);



const About: React.FC<AboutProps> = () => {
    return(
        <section id="about" className="bg-[#E6E5DE] lg:p-8 text-black flex flex-col w-full">
            <SectionTitle section="Sobre"/>

            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
                    
                <DescriptionCode text={description} />

                <CodePresentation fullCode={full}/>
                
            </div>

        </section>
    )
}

export default About;