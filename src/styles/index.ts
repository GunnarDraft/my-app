import styled from "styled-components";
import Image from "next/image";

const Main = styled.main` 
  height:100vh;
  width:100vw;  
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
  backdrop-filter:blur(16px);
`
const PrimaryContainer = styled.div` 
  position:relative;
  display:flex;
  flex:1;
  justify-content:flex-start;
  flex-flow:column;  
  margin-top:72px;  
  height:calc(100vh - 150px);
  min-height:800px;
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
const VideoImage = styled(Image)`
  width:256px;
  height:256px;
  border-radius:50%;
  cursor: pointer;
`
const FlexItem = styled.div` 
  height:calc(256px + 32px);
  width:256px;
  text-align:center;
  margin:8px; 
  position:relative;
`
const TextHover = styled.p`
  position:absolute;
  height:234px;
  width:234px;
  top:10px;
  left:12px;
  opacity:0;
  transition: all 0.2s;
  background-color: #aa0000;
  vertical-align:middle;
  text-align: center ;
  border-radius:50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:32px;
  cursor: pointer;
user-select: none;
  &:hover{
    opacity:1;
  }
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
  height:34px;
  width:34px;
  padding:4px;
  margin:4px;
  border:none;
  border-radius:3px;
  cursor: pointer;
  &:hover{
    transform:scale(1.1);
    transition:all 0.2s;
  }
    &:active{
    transform:scale(0.9);
    transition:all 0.2s;
  }
  &.facebook{
    background-color: #0866ff;
  }
  &.mobli{
    background-color: #5c8bd7;
  }
  &.twitter{
    background-color: #00acee;
  }
  &.youtube {
    background-color: #ff0000;
  }
`
const ImgBackground = styled(Image)`
  position:absolute;
  width:100vw;
  height:calc(100vh - 70px) ;
  min-height:800px;
  z-index:-1; 
`
const Iframe = styled.iframe`
  margin:32px;
  width:840px;
  height:472px;
  min-height:472px;
  @media (max-width: 840px) {
    width:560px;
    height:315px;
    min-height:315px;
  }
   @media (max-width: 560px) {
    width:380px;
    height:200px;
    min-height:200px;
  }
`
const Title = styled.p`
  width:100vw;
  text-align:center;
  font-size:36px;
  margin:32px 0;
  font-weight:900;
`
const SecondTitle = styled.p`
  width:100vw;
  text-align:center;
  font-size:36px;
  margin:32px 0;
  font-weight:400;
`
const P = styled.p`
  width:100vw;
  text-align:center;
  font-size:18px;
  margin:16px;
`
const B = styled.b`
  width:100vw;
  text-align:center;
  font-size:26px;
  font-weight: 900;
  margin:16px;
`
const TempoContainer = styled.div`
  width:100vw;
  display:flex;
  justify-content:center;
  margin-bottom:32px;
  P{
    text-align:center;
    border:4px solid white;
    border-radius:50%;
    height: 86px;
    width:86px; 
    margin: 4px;
    padding:8px 0;
    font-weight:bolder;
    text-shadow:1px 1px 2px #000
  }
`
const SimpleButton = styled.button`
    background:none;
    border:none;
    padding:12px;
    font-size:16px;
    border-radius: 4px;
    cursor: pointer;
  &:hover{
    background-color:#A0A0A0AA; 
    transition:all 0.2s;
  }
  &:active{
      background-color:#A0A0A0AA; 
    transition:all 0.2s;
  }
`
export { Main, NavBarContainer, PrimaryContainer, SecondContainer, FlexItem, FooterContainer, TempoContainer, P, B, Title, Iframe, ImgBackground, BtnSM, SecondTitle, SimpleButton, VideoImage, TextHover }