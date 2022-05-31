import { defineNuxtConfig } from '@nuxt/bridge';

export default defineNuxtConfig({
  bridge: {
    // Required because of https://github.com/nuxt/framework/issues/886
    nitro: false,
    meta: true,
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  target: 'static',

  components: true,
})
