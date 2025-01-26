import { ITheme } from "@/interfaces";
import Image from "next/image";

interface HeaderProps {
  theme: ITheme;
}

const Header = ({ theme }: HeaderProps) => {
  return (
    <>
      {theme.logo && <Image
        src={theme.logo.asset.url}
        alt={theme.logo.alt}
        priority
        width={300}
        height={300}
        className="z-10 w-72 h-auto md:hidden"
      />}
      {theme.horizontalLogo && <Image
        src={theme.horizontalLogo.asset.url}
        alt={theme.horizontalLogo.alt}
        priority
        width={300}
        height={300}
        className="z-10 w-72 h-auto hidden md:block"
      />}
    </>
  )
}

export { Header }