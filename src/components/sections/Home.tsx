import { Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

interface HomeProps{

}

const Home: React.FC<HomeProps> = () => {
    return(
        <div  className="flex flex-col bg-[#010F22] w-screen h-screen border-white border-t-2">
            <section id="home" className="grid grid-cols-1 lg:flex items-center justify-center m-auto place-items-center gap-8">



                <div className="relative w-70 h-70">
                    <img src="myphoto.png" className="w-full h-full object-cover rounded-full" />
                </div>


                <div className="flex flex-col items-center p-2 text-white justify-center">
                    
                <h1 className="text-white text-center text-5xl font-thin lg:text-8xl">Lailson Santana</h1>
                <h2 className="text-white text-center text-3xl font-thin lg:text-6xl">Backend Developer</h2>
                    
                    
                    
                    <div className="flex gap-4 mt-4 p-4">
                        <a href="/curriculo.pdf" download>
                            <Button variant="outlined" size="small"
                            sx={{ fontFamily:'Dosis' , color: 'white', borderColor: 'gray', padding:"6px", minWidth: '150px', '&:hover': { borderColor: 'gray.300' } }}
                            className="flex gap-1 m-auto text-white lg:w-full">
                                <DownloadIcon fontSize="small"/>
                                <span>Download CV</span>
                            </Button>
                        </a>

                        <a href="https://www.linkedin.com/in/lailson-santana-dev/">
                            <Button variant="outlined" size="small"
                            sx={{ fontFamily:'Dosis', color: 'white', borderColor: 'gray', padding:"6px" , minWidth: '150px', '&:hover': { borderColor: 'gray.300' } }}
                            className="flex gap-1 m-auto text-white lg:w-full">
                                <EmailIcon fontSize="small"/>
                                <span>Fale comigo</span>
                            </Button>
                        </a>
                        
                    </div>

                    
                </div>
            </section>

            <div className="flex flex-col p-8 items-end">
                <div className="flex flex-col">
                    <h1 className="text-white text-center text-sm lg:text-lg font-thin">Aprendendo a construir e transformar códigos em soluções reais, </h1>
                    <h1 className="text-white text-center text-sm lg:text-lg font-thin">em um mundo digital, dinâmico e conectado.  </h1>
                </div>
            </div>
        </div>

    )
}

export default Home;
