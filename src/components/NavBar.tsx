import { NavBarContainer } from "@/styles"
import Image from "next/image";

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
export default NavBar
