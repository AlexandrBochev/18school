import { JSX } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiYoutubemusic, SiSpotify, SiApplemusic } from 'react-icons/si';
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { getSocial, getTheme } from "@/sanity/sanity-utils";
import { ISocial, ITheme } from "@/interfaces";

interface SocialMediaIcon {
  [key: string]: JSX.Element;
}

const SOCIAL_MEDIA_ICONS: SocialMediaIcon = {
  Instagram: <RiInstagramFill size={40} className="text-primary" />,
  Facebook: <FaFacebook size={40} className="text-primary" />,
  TikTok: <AiFillTikTok size={40} className="text-primary" />,
  YouTubeMusic: <SiYoutubemusic size={40} className="text-primary" />,
  Spotify: <SiSpotify size={40} className="text-primary" />,
  AppleMusic: <SiApplemusic size={32} className="text-primary m-1" />,
  YouTube: <FaYoutube size={40} className="text-primary" />,
};

export default async function Home() {
  const socialMedia: ISocial[] = await getSocial();
  const theme: ITheme = await getTheme();

  return (
    <div>
      <main
        className="
          w-full h-[100vh] flex flex-col items-start
          md:items-center justify-between p-8 pr-5 pb-2 relative
        "
      >
        <Image
          src={theme.logo}
          alt="18 school logo"
          priority
          width={100}
          height={100}
          className="z-10 w-auto -rotate-18 md:hidden"
        />
        <Image
          src={theme.horizontalLogo}
          alt="18 school logo"
          priority
          width={400}
          height={200}
          className="z-10 w-auto hidden md:block"
        />
        <Image
          src={theme.background}
          alt="Background"
          priority
          fill
          className="w-auto absolute inset-0 object-cover"
        />
        <div className="w-full flex flex-col items-center justify-center z-10">
          <div
            className="
              w-full flex flex-col items-end justify-center gap-5 md:flex-row
            "
          >
            {socialMedia.map(social => (
              <Link
                key={social._id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="
                  p-0.5 rounded-full bg-white border-2 border-primary
                  hover:scale-105 active:scale-95 transition-all
                "
              >
                {SOCIAL_MEDIA_ICONS[social.name]}
              </Link>
            ))}
          </div>
          <p className="text-xs text-white mt-2">{theme.footer}</p>
        </div>
      </main>
    </div>
  );
}
