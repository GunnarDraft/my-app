import { FooterContainer, SimpleButton, BtnSM } from "@/styles"
import { SvgTwitter, Svgfacebook, SvgYouTube } from "./SVGs"
import Image from "next/image";

const Footer = () => {
    return <FooterContainer>
        <SimpleButton>Aviso de privacidad / Contacto</SimpleButton>
        <Image
            src="/img/logo-sochi-color.png"
            alt="logo-sochi-color.png"
            width={140}
            height={60} />
        <div>
            <BtnSM className='mobli'>
                <Image
                    src="/img/mobli-icon.png"
                    alt=" mobli-icon.png"
                    width={24}
                    height={24} />
            </BtnSM>
            <BtnSM className='twitter'>
                <SvgTwitter />
            </BtnSM>
            <BtnSM className='facebook'>
                <Svgfacebook />
            </BtnSM>
            <BtnSM className='youtube'>
                <SvgYouTube />
            </BtnSM>
        </div>
    </FooterContainer>
}

export default Footer
