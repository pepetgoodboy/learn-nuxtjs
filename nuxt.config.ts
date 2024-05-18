// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },

  pwa: {
    manifest: {
      name: "Abstract",
      short_name: "Abstract",
      theme_color: "#fff",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "images/icons/js-96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "images/icons/js-128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "images/icons/js-144.png",
          sizes: "144x144",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
    },
  },
});
