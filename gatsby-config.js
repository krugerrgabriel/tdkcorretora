/**
 * Configure o gatsby nesse arquivo
 *
 * Olhe: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteMetadata = require("./config/metadata");

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Definir cor.
        color: `#FFCC00`,
        // Desativar spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:300,400,500,600,700,800,900`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TDK Corretora`,
        short_name: `TDK Corretora`,
        start_url: `/`,
        background_color: `#7C7C7B`,
        theme_color: `#FFCC00`,
        display: `standalone`,
        icon: `src/assets/img/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.tdkcorretora.com.br/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.ts`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/img`,
      },
    },
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // ID do Google Analytics
    //     trackingId: "UA-codigo",
    //     // Delay em milisegundos do mínimo que precisa ficar na página para contar como impressão
    //     pageTransitionDelay: 0,
    //   },
    // },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
  ],
};
