import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemas } from './sanity/schemas'

export const config = defineConfig({
  title: '18school-backend',
  projectId: '0bh34ggy',
  dataset: 'production',
  apiVersion: '2024-12-25',
  basePath: '/admin',
  plugins: [
    structureTool()
  ],
  
  schema: {
    types: schemas,
  },
})