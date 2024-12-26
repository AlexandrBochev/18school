import Image from "next/image";
import { getSocial, getTheme } from "@/sanity/sanity-utils";
import { ISocial, ITheme } from "@/interfaces";
import { Header } from "@/components/Header/Header";
import { SocialMedia } from "@/components/SocialMedia/SocialMedia";

export default async function Home() {
  const socialMedia: ISocial[] = await getSocial();
  const theme: ITheme = await getTheme();

  return (
    <div>
      <main
        className="
          w-full h-svh flex flex-col items-start
          md:items-center justify-between p-8 pr-5 pb-2 relative
        "
      >
        <Header theme={theme} />
        <SocialMedia socialMedia={socialMedia} footerContent={theme.footer} />
        <Image
          src={theme.background.asset.url}
          alt={theme.background.alt}
          priority
          fill
          className="w-auto absolute inset-0 object-cover"
        />
      </main>
    </div>
  );
}
