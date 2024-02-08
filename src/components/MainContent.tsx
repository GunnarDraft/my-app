import { PrimaryContainer, ImgBackground, Title, Iframe } from "@/styles"
import Timer from "@/components/Timer"

const MainContent = ({ video }: { video: string }) => {
    return <PrimaryContainer>
        <ImgBackground
            src="/img/background.jpg"
            alt="background.jpg"
            width={1200}
            height={600} />
        <Title>FALTAN</Title>
        <Timer />
        <Iframe
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></Iframe>
    </PrimaryContainer>
}
export default MainContent