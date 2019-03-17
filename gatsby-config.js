module.exports = {
  siteMetadata: {
    title: 'TechElement',
    siteDescription: 'TechElement - Comments on Technology and Humanity',
    authorName: 'Brian Langhoff'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'TechElement',
        short_name: 'TechElement',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone'
        icon: '/src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/blog-posts`
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-'
            }
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-offline',
  ]
}
