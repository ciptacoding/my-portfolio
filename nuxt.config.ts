// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@gits-id/ui-nuxt', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title: 'My - Portfolio',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css' }
      ]
    }
  }
});
