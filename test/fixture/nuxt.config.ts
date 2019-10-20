import path from 'path'
import { Configuration } from '@nuxt/types'
import typescriptModule from '@nuxt/typescript-build'
import storyblokNuxtModule from '../../src'

const config: Partial<Configuration> = {
  rootDir: path.resolve(__dirname, '../..'),
  buildDIr: path.resolve(__dirname, '.nuxt'),
  srcDir: __dirname,

  buildModules: [typescriptModule, storyblokNuxtModule],
  storyblok: {
    accessToken: '',
    cacheProvider: 'memory'
  }
}

export default config
