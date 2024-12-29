import { ISocial } from "@/interfaces";
import Link from "next/link";
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiYoutubemusic, SiSpotify, SiApplemusic } from 'react-icons/si';
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";

interface SocialMediaProps {
  socialMedia: ISocial[];
  footerContent: string;
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

const SocialMedia = ({ socialMedia, footerContent }: SocialMediaProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center z-10">
      <div
        className="
          w-full flex flex-col items-end justify-center gap-4 md:flex-row
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
      <p className="text-xs text-primary mt-2">{footerContent}</p>
    </div>
  )
}

export { SocialMedia }