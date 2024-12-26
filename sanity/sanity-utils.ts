import { createClient, groq } from "next-sanity"
import clientConfig from "./config/client-config"
import { ISocial, ITheme } from "@/interfaces"

export const getSocial = async (): Promise<ISocial[]> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "social"] {
      _id,
      _createdAt,
      name,
      url,
    }`
  )
}

export const getTheme = async (): Promise<ITheme> => {
  return createClient(clientConfig).fetch(
    groq`*[_type == "theme"][0] {
      _id,
      _createdAt,
      "logo": logo.asset->url,
      "background": background.asset->url,
      footer,
    }`
  )
}

