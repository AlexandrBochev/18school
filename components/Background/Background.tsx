import { ITheme } from "@/interfaces"
import Image from "next/image"

interface BackgroundProps {
  theme: ITheme
}

const Background = ({ theme }: BackgroundProps) => {
  return (
    <>
      {theme.background && <Image
        src={theme.background.asset.url}
        alt={theme.background.alt}
        priority
        fill
        className="absolute top-0 left-0 object-cover w-full h-full md:hidden -z-10"
      />}
      {theme.horizontalBackground && <Image
        src={theme.horizontalBackground.asset.url}
        alt={theme.horizontalBackground.alt}
        priority
        fill
        className="absolute top-0 left-0 object-cover w-full h-full hidden md:block -z-10"
      />}
    </>
  )
}

export { Background }