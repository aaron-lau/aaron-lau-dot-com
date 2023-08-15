module.exports = {
  siteMetadata: {
    title: `Aaron Lau`,
    siteUrl: `https://aaron-lau.com`,
    description: `I mainly write about web technologies like react, javascript, css and random stuffs that I come across while programming`,
    author: {
      name: `Aaron Lau`,
    },
    social: {
      twitter: '@aaron_lau',
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify`,
    `gatsby-transformer-json`,
    // sitemap generation
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ['/success', '/tags/*'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // markdown file are in that directory (/content/)
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `blog`, path: `${__dirname}/content/blog` },
    },
    // json data
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `data`, path: `${__dirname}/src/data/` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aaron Lau`,
        short_name: `Aaron Lau`,
        start_url: `/`,
        background_color: `#F1F1F1`,
        theme_color: `#F1F1F1`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    // google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-133322442-4',
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    // transforming mdx to html
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          // using images in markdown file
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
              quality: 100,
              withWebp: true,
            },
          },
          // adding id to headers in markdown
          // {
          //   resolve: `gatsby-remark-autolink-headers`,
          //   options: {
          //     maintainCase: false,
          //     removeAccents: true,
          //     icon: `<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24"><path d="M22.548 9l.452-2h-5.364l1.364-6h-2l-1.364 6h-5l1.364-6h-2l-1.364 6h-6.184l-.452 2h6.182l-1.364 6h-5.36l-.458 2h5.364l-1.364 6h2l1.364-6h5l-1.364 6h2l1.364-6h6.185l.451-2h-6.182l1.364-6h5.366zm-8.73 6h-5l1.364-6h5l-1.364 6z"/></svg>`,
          //   },
          // },
          // code highlighting
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
          // copying gif and other files
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: '#035388',
        showSpinner: false,
        trickleSpeed: 400,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
