export interface ISocial {
  _id: string
  _createdAt: string
  name: string
  url: string
}

export interface ImageField {
  asset: {
    url: string;
  };
  alt: string;
}

export interface ITheme {
  _id: string
  _createdAt: string
  logo: ImageField
  horizontalLogo: ImageField
  background: ImageField
  footer: string
}