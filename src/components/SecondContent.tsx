import { FlexItem, SecondContainer, SecondTitle, TextHover, VideoImage } from "@/styles"

const SecondContent = ({ setVideo }: { setVideo: React.Dispatch<React.SetStateAction<string>> }) => {
    return <SecondContainer>
        <SecondTitle>CLARO SPORTS EN SOCHI 2014</SecondTitle>
        <FlexItem>
            <VideoImage
                src="/img/team-latam.png"
                alt="team-latam.png"
                width={256}
                height={256}
            />
            <TextHover onClick={() => setVideo('https://www.youtube.com/embed/wAYwMNArPh8?si=-97LDPa7Hmj5T8h_')}>
                Los Deportistas latinoamericanos que participan en Sochi 2014.
            </TextHover>
            TEAM LATAM
        </FlexItem>
        <FlexItem>
            <VideoImage
                src="/img/travel-meets-fashion.png"
                alt="travel-meets-fashion.png"
                width={256}
                height={256}
            />
            <TextHover onClick={() => setVideo('https://www.youtube.com/embed/FDRyVCEzKBw?si=CodWW2aU1pxKTvH-')}>
                Los Deportistas latinoamericanos que participan en Sochi 2014.
            </TextHover>
            TRAVEL MEETS FASHION
        </FlexItem>
        <FlexItem>
            <VideoImage
                src="/img/velocidad-riesgo.png"
                alt="velocidad-riesgo.png"
                width={256}
                height={256}
            />
            <TextHover onClick={() => setVideo('https://www.youtube.com/embed/Wq7QTNEivII?si=nKJdKj9RKMGBneN9')}>
                Los Deportistas latinoamericanos que participan en Sochi 2014.
            </TextHover>
            VELOCIDAD Y REISGO
        </FlexItem>
        <FlexItem>
            <VideoImage
                src="/img/experiencia.png"
                alt="experiencia.png"
                width={256}
                height={256}

            />
            <TextHover onClick={() => setVideo('https://www.youtube.com/embed/1S-xYM2iQok?si=mrJ_a6nSHdO9SlFS')}>
                Los Deportistas latinoamericanos que participan en Sochi 2014.
            </TextHover>
            EXPERIENCIA MULTIMEDIA
        </FlexItem>
    </SecondContainer>
}

export default SecondContent
