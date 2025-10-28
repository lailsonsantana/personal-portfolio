import { Check } from "@phosphor-icons/react";
import SectionTitle from "../SectionTitle";
import TodayIcon from '@mui/icons-material/Today';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import PendingIcon from '@mui/icons-material/Pending';
import ContainerInfo from "../containers/ContainerInfo";

interface InformationProps{

}
// Em busca de novos desafios
// Foco no desenvolvimento contínuo
const Information: React.FC<InformationProps> = () => {
    return(
        <section id="Information" className="bg-[#E6E5DE] p-4 pb-32 pt-16 text-black flex flex-col">
            <SectionTitle section="Mais Informações" />

            <div className="max-w-6xl mx-auto space-y-12 mt-8 font-thin flex flex-wrap">

                {/* OBJETIVOS */}
                <div>
                <h2 className="text-4xl font-semibold mb-6 text-center text-black">Objetivos</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 m-8">
                    
                    {/* Curto Prazo */}
                    <ContainerInfo>
                    <h3 className="flex items-center gap-2 text-2xl font-bold mb-4 border-b-1 border-gray-700 p-2">
                        <TodayIcon className="text-[#8EA7CB]" />
                        Curto Prazo
                    </h3>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center gap-2">
                        <Check className="text-green-600" />
                        Finalizar e apresentar meu trabalho de conclusão de curso (TCC)
                        </li>
                        <li className="flex items-center gap-2">
                        <Check className="text-green-600" />
                        Ingressar no mercado de trabalho
                        </li>
                        <li className="flex items-center gap-2">
                        <Check className="text-green-600" />
                        Iniciar o aprendizado de microservices no Spring Boot
                        </li>
                    </ul>
                    </ContainerInfo>

                    {/* Médio/Longo Prazo */}
                    <ContainerInfo>
                    <h3 className="flex items-center gap-2 text-2xl font-bold mb-4 border-b-1 border-gray-700 p-2">
                        <DateRangeIcon className="text-[#8EA7CB]" />
                        Médio / Longo Prazo
                    </h3>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center gap-2">
                        <Check className="text-green-600" />
                        Pós-graduação em Desenvolvimento Web
                        </li>
                        <li className="flex items-center gap-2">
                        <Check className="text-green-600" />
                        Aprimorar minha capacidade de entender e resolver problemas
                        </li>
                        <li className="flex items-center gap-2">
                        <Check className="text-green-600" />
                        Lançamento de uma plataforma para ensino e aprendizado da língua inglesa
                        </li>
                    </ul>
                    </ContainerInfo>

                </div>
                </div>

                {/* CURSOS */}
                <div>
                <h2 className="text-4xl font-semibold mb-6 text-center">Cursos</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 m-8">

                    {/* Finalizados */}
                    <ContainerInfo>
                    <h3 className="flex items-center gap-2 text-2xl font-bold mb-4 border-b-1 border-gray-700 p-2">
                        <ChecklistRtlIcon className="text-teal-500" />
                        Finalizados
                    </h3>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center gap-2">
                        <Check className="text-green-600" />
                        Inglês - KNN Brasil - 172h - Concluído em: 10/2024
                        </li>
                        <li className="flex items-center gap-2">
                        <Check className="text-green-600" />
                        Full Stack - Spring Boot + React JS - Udemy - Concluído em: 10/2024
                        </li>
                        <li className="flex items-center gap-2">
                        <Check className="text-green-600" />
                        Inglês - Access E2C English - 210h - Concluído em: 12/2023
                        </li>
                    </ul>
                    </ContainerInfo>

                    {/* Em Andamento */}
                    <ContainerInfo>
                    <h3 className="flex items-center gap-2 text-2xl font-bold mb-4 border-b-1 border-gray-700 p-2">
                        <PendingIcon className="text-[#8EA7CB]" />
                        Em andamento
                    </h3>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center gap-2">
                        <Check className="text-green-600" />
                        AWS na Prática
                        </li>
                        <li className="flex items-center gap-2">
                        <Check className="text-gray-400" />
                        {/* Outro curso em branco, você pode adicionar */}
                        Aguardando atualização
                        </li>
                        <li className="flex items-center gap-2">
                        <Check className="text-gray-400" />
                        Aguardando atualização
                        </li>
                    </ul>
                    </ContainerInfo>

                </div>
                </div>
            </div>
        </section>
    )
}

export default Information;