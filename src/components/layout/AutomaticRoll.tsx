import { Icon } from '@iconify/react';

<Icon icon="simple-icons/react" width="32" height="32" />


const techs = [
  { name: "Java", icon: "mdi:language-java" },
  { name: "Spring Boot", icon: "simple-icons/springboot" },
  { name: "React", icon: "mdi:react" },
  { name: "Github" , icon: "mdi:github" },
  { name: "Tailwind", icon: "simple-icons/tailwindcss" },
  { name: "TypeScript", icon: "mdi:language-typescript" },
  { name: "Node.js", icon: "mdi:nodejs" },
  { name: "Next.js", icon: "simple-icons:nextdotjs" },
  { name: "PostgreSQL", icon: "mdi:database" },
  { name: "Docker", icon: "mdi:docker" },
  { name: "Python", icon: "mdi:language-python" },
];

export default function InfiniteScroll() {
  return (
    <div className="relative overflow-hidden bg-[#080121] py-4 border-y border-gray-700 w-screen">
      {/* Sombras laterais */}
      <div className="absolute left-0 top-0 h-full w-16 bg-linear-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 bg-linear-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

      {/* Faixa com as tecnologias duplicadas */}
      <div className="flex animate-marquee whitespace-nowrap min-w-max ">
        {[...techs, ...techs].map((tech, index) => (
          <span key={index} className="text-white text-xl mx-8 flex justify-center items-center gap-1">
            <Icon icon={tech.icon} width={24} style={{ fill: 'white' }}/>
            
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}



  