"use client"
import Image from "next/image";
import styled from "styled-components";
import { Exo } from 'next/font/google'

const exo = Exo({
  weight: '400',
  subsets: ['latin'],
})

const Main = styled.main` 
  height:100vh;
  width:100vw; 
  overflow:auto;
`
const NavBarContainer = styled.div`
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:72px; 
  z-index:3;
  padding:4px;
  display:flex;
  flex:1;
  justify-content:space-around;
  border-bottom: 4px solid #ff0000cc;
  background:#000000cc;
  backdrop-filter:blur(8px);
`
const PrimaryContainer = styled.div` 
  position:relative;
  display:flex;
  flex:1;
  justify-content:center;
  flex-flow:column;  
  margin-top:72px;  
  height:calc(100vh - 68px);
  align-items: center; 
`
const SecondContainer = styled.div` 
  display:flex; 
  flex-wrap: wrap;
  justify-content:center;
  background-color:#222;
  border-bottom: 4px solid #444;
  padding:32px 0;
`
const FlexItem = styled.div` 
  height:calc(256px + 32px);
  width:256px;
  text-align:center;
  margin:8px; 
`
const FooterContainer = styled.footer`
  height:128px; 
  display:flex;
  flex:1;
  justify-content:space-evenly;
  align-items:center;
  background-color:#000000;
`

const BtnSM = styled.button`
 height:24px;
 width:24px;
 padding:12px;
 margin:4px;
`
const ImgBackground = styled(Image)`
  position:absolute;
  width:100vw;
  height:calc(100vh - 70px) ;
  z-index:-1;
  aspect-ratio: initial;
`
const Iframe = styled.iframe`
  width:560;
  height:315;
`
const P = styled.p`
  width:100vw;
  text-align:center;
  font-size:36px;
  margin:16px;
`
const B = styled.b`
  width:100vw;
  text-align:center;
  font-size:36px;
  font-weight: 900;
  margin:16px;
`
export default function Home() {
  return (
    <Main className={exo.className} >
      <NavBar />
      <MainContent />
      <SecondContent />
      <Footer />
    </Main>
  );
}

const NavBar = () => {
  return <NavBarContainer>
    <Image
      src="/img/logo-sochi-color.png"
      alt="logo-sochi-color.png"
      width={140}
      height={60} />
    <Image
      src="/img/logo-claro-sports.png"
      alt="logo-claro-sports.png"
      width={140}
      height={60} />
  </NavBarContainer>
}
const MainContent = () => {
  return <PrimaryContainer>
    <ImgBackground
      src="/img/background.jpg"
      alt="background.jpg"
      width={1200}
      height={600} />
    <B>FALTAN</B>
    <Iframe
      width="840"
      height="472"
      src="https://www.youtube.com/embed/Ay5vD9xRsuI?si=V3vm_M8zkk8ZSnUR"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen></Iframe>
  </PrimaryContainer>
}
const SecondContent = () => {
  return <SecondContainer>
    <P>CLARO SPORTS EN SOCHI 2014</P>
    <FlexItem>
      <Image
        src="/img/team-latam.png"
        alt="team-latam.png"
        width={256}
        height={256} />
      TEAM LATAM
    </FlexItem>
    <FlexItem>
      <Image
        src="/img/travel-meets-fashion.png"
        alt="travel-meets-fashion.png"
        width={256}
        height={256} />
      TRAVEL MEETS FASHION
    </FlexItem>
    <FlexItem>
      <Image
        src="/img/velocidad-riesgo.png"
        alt="velocidad-riesgo.png"
        width={256}
        height={256} />
      VELOCIDAD Y REISGO
    </FlexItem>
    <FlexItem>
      <Image
        src="/img/experiencia.png"
        alt="experiencia.png"
        width={256}
        height={256} />
      EXPERIENCIA MULTIMEDIA
    </FlexItem>
  </SecondContainer>
}
const TimerContent = () => {
  return <>

  </>
}
const Footer = () => {
  return <FooterContainer>
    Aviso de privacidad / Contacto
    <Image
      src="/img/logo-sochi-color.png"
      alt="logo-sochi-color.png"
      width={140}
      height={60} />
    <div>
      <ButtonSocialMedia />
      <ButtonSocialMedia />
      <ButtonSocialMedia />
      <ButtonSocialMedia />
    </div>
  </FooterContainer>
}

const ButtonSocialMedia = () => {
  return <BtnSM>

  </BtnSM>
}

