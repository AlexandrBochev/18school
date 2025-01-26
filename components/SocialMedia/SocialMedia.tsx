import { ISocial } from "@/interfaces";
import Link from "next/link";
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiYoutubemusic, SiSpotify, SiApplemusic } from 'react-icons/si';
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";

interface SocialMediaProps {
  socialMedia: ISocial[];
}

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

const SocialMedia = ({ socialMedia }: SocialMediaProps) => {
  return (
    <div
      className="
        absolute -bottom-1 right-5 flex flex-col items-center justify-center gap-3
        p-3 pb-12 rounded-md bg-white/50 shadow-lg backdrop-blur-sm
        md:flex-row md:bottom-1/3 md:-left-1 md:right-auto md:p-5 md:pl-40 md:gap-5
      "
    >
      <p className="hidden md:block text-primary font-semibold">{"Follow us"}</p>
      {socialMedia.map(social => (
        <Link
          key={social._id}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className="hover:scale-105 active:scale-95 transition-all"
        >
          {SOCIAL_MEDIA_ICONS[social.name]}
        </Link>
      ))}
    </div>
  )
}

export { SocialMedia }