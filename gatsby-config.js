require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Oat Canada - Barista Zero Sugar Oat Milk`,
    description: `Looking for an oat milk that is actually Unsweetened & Keto Friendly? Try our Oat Canada Barista Zero Sugar Oat Milk today! Now available at Costco.`,
    author: `@OatCanada`,
    url: `https://oatcanada.com`,
    siteUrl: `https://oatcanada.com`,
    image: "https://i.imgur.com/ZRt1CJZ.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["AW-564308269", "UA-147980700-1"],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    "gatsby-plugin-theme-ui",
    `gatsby-theme-style-guide`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `oat canada`,
        short_name: `oat canada`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ed126a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: "12XQAW",
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: 1600422950346141,
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "/tiktok.js",
      },
    },
  ],
}
