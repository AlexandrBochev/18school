export const social = {
  name: 'social',
  title: 'Social Media',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        list: [
          { title: 'Instagram', value: 'Instagram' },
          { title: 'Facebook', value: 'Facebook' },
          { title: 'TikTok', value: 'TikTok' },
          { title: 'YouTube Music', value: 'YouTubeMusic' },
          { title: 'Spotify', value: 'Spotify' },
          { title: 'Apple Music', value: 'AppleMusic' },
          { title: 'YouTube', value: 'YouTube' },
        ],
      },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
  ],
};