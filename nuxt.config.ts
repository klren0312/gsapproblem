// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@hypernym/nuxt-gsap'],
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  }
})
