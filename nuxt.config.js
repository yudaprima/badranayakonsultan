const main_base_URL = "https://badranaya.net";

export default {
  sitemap: {
    hostname: main_base_URL,
  },
  env: {
    main_base_URL,
  },
  robots: {
    /* opsi */
    UserAgent: "*",
    Disallow: "",
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: " %s | Badranaya",
    title: "badranaya" || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Jasa pembuatan website portofolio perusahaan dan website toko online terbaik dengan loading speed dan SEO friendly",
      },

      { name: "format-detection", content: "telephone=no" },
    ],
    htmlAtters: {
      lang: "id",
    },

    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: `https://badranaya.net`,
      },
      { rel: "icon", type: "image/x-icon", href: "/icon.png" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/app.scss"],
  purgeCSS: {
    whitelist: ["dark-mode"],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~plugins/crisp.js", mode: "client" }],

  // "~plugins/gtag",
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/html-validator",
    // "@nuxtjs/google-analytics",
    "@nuxt/image",
  ],
  // googleAnalytics: {
  //   id: "UA-203329273-1"
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "id",
    },
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css",
      },
    },
    nestedProperties: ["author.name"],
  },

  htmlValidator: {
    usePrettier: false,
    failOnError: false,
    options: {
      extends: [
        "html-validate:document",
        "html-validate:recommended",
        "html-validate:standard",
      ],
      rules: {
        "svg-focusable": "off",
        "no-unknown-elements": "error",
        // Conflicts or not needed as we use prettier formatting
        "void-style": "off",
        "no-trailing-whitespace": "off",
        // Conflict with Nuxt defaults
        "require-sri": "off",
        "attribute-boolean-style": "off",
        "doctype-style": "off",
        // Unreasonable rule
        "no-inline-style": "off",
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // babel: {
    //   presets: [
    //     [
    //       "@babel/preset-env",
    //       {
    //         targets: {
    //           esmodules: true
    //         },
    //         loose: true,
    //         shippedProposals: true
    //       }
    //     ]
    //   ]
    // },
    // transpile: ["vue-instantsearch", "instantsearch.js/es"],

    postcss: {
      plugins: {
        tailwindcss: "./tailwind.config.js",
      },
    },
  },
  generate: {
    fallback: "404.html",
  },
};
