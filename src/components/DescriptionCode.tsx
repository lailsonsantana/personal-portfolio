import ContainerCode from "./containers/ContainerCode";
import CloseIcon from '@mui/icons-material/Close';

interface DescriptionCodeProps{
    text: React.ReactNode;
}

const DescriptionCode: React.FC<DescriptionCodeProps> = ({text} : DescriptionCodeProps) => {
    return(
        
        <ContainerCode>

          <div className="bg-[#010421] px-4 py-2 flex border-b border-[#333]">
            <div className="flex items-center w-1/2">
              <div className="flex space-x-2 mr-4">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]"/>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"/>
                <span className="w-3 h-3 rounded-full bg-[#27c93f]"/>
              </div>
              <div className="text-sm text-gray-400">description.js</div>
            </div>
            
            <span className="flex justify-end w-1/2">
              <CloseIcon fontSize="small" />
            </span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl m-auto">
              Hello World
            </h1>

            
              {text}
            
          </div>
    
          <div className="bg-[#007acc] text-white text-xs px-4 py-1 flex justify-between">
            <span>UTF-8</span>
            <span>JavaScript</span>
          </div>
        </ContainerCode>
    )
}

export default DescriptionCode;