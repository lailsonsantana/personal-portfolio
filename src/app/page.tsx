'use client'

import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Home from "@/components/sections/Home";
import Template from "@/components/Template";
import Skills from "@/components/sections/Skills";
import Information from "@/components/sections/Informations";
import ScrollTop from "@/components/ScrollTop";
import TagsCard from "@/components/layout/TagsCard";


export default function Page() {
  return (
    <main>
        <Template>
            <ScrollTop />
            <Home />
            <About />
            <Projects />
            <Skills />
            <Information />
        </Template>
    </main>
  );
}
