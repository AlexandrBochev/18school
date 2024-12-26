import { ITheme } from "@/interfaces";
import Image from "next/image";

interface HeaderProps {
  theme: ITheme;
}

const Header = ({ theme }: HeaderProps) => {
  return (
    <>
      <Image
        src={theme.logo.asset.url}
        alt={theme.logo.alt}
        priority
        width={80}
        height={80}
        className="z-10 w-auto -rotate-18 md:hidden"
      />
      <Image
        src={theme.horizontalLogo.asset.url}
        alt={theme.horizontalLogo.alt}
        priority
        width={300}
        height={100}
        className="z-10 w-auto hidden md:block"
      />
    </>
  )
}

export { Header }