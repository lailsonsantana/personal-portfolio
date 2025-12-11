'use client'

import Navbar from "./Navbar"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


interface TemplateProps{
    children: React.ReactNode
}

const Template: React.FC<TemplateProps> = ({children}) => {
    return(
        <>
            <Header />

            
                {children}
            

            <Footer />
        </>
    )
}

const Header: React.FC = () => {
    return(
        <div >
            <Navbar />
        </div>
    )
}

const Footer: React.FC = () => {
    return(
        <footer className="grid grid-cols-1 lg:grid-cols-2 place-items-center  bg-[#010F22] text-white">
            <div className="flex items-center ml-4">
                <p>© 2025 Lailson Santana . All rights reserved.</p>
            </div>

            <div className="flex gap-8 p-4 items-center justify-end mr-4">
                            <a href="https://www.linkedin.com/in/lailson-santana-dev/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon fontSize="large" />
                            </a>
                            <a href="https://github.com/LailsonSantana" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon fontSize="large" />
                            </a>
                            <a href="https://wa.me/5577998751050" target="_blank" rel="noopener noreferrer">
                                <WhatsAppIcon fontSize="large" />
                            </a>
                            {/*<button className="fixed bottom-0 right-4 z-50 flex flex-col justify-center items-center rounded-full p-2 border border-gray-700 bg-red-500 shadow-md hover:bg-gray-100 transition">
                            <a href="#top" aria-label="Voltar ao topo">
                                <ArrowUpwardIcon fontSize="medium"/>
                            </a>
                            </button>*/}

            </div>
        </footer>
    )
}

export default Template;