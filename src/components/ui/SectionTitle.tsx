interface SectionTitleProps{
    section: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({section}) => {
    return(
            <h1 className="text-5xl font-thin lg:text-7xl p-4 lg:p-8 ">
                {section}
            </h1>
    )
}

export default SectionTitle;