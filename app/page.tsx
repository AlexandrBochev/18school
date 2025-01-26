import { getSocial, getTheme } from "@/sanity/sanity-utils";
import { ISocial, ITheme } from "@/interfaces";
import { Header } from "@/components/Header/Header";
import { SocialMedia } from "@/components/SocialMedia/SocialMedia";
import { Background } from "@/components/Background/Background";

export default async function Home() {
  const socialMedia: ISocial[] = await getSocial();
  const theme: ITheme = await getTheme();

  return (
    <div>
      <main
        className="
          w-full h-dvh relative px-5 py-8 overflow-hidden
          flex flex-col items-center justify-between
          md:p-12
        "
      >
        <Header theme={theme} />
        <SocialMedia socialMedia={socialMedia} />
        <Background theme={theme} />
        <footer className="w-full">
          <p className="text-xs text-primary md:text-center">{theme.footer}</p>
        </footer>
      </main>
    </div>
  );
}
