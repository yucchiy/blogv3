import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Yucchiy's Note`,
    siteUrl: `https://blog.yucchiy.com`,
    siteLang: `ja`,
    defaultDescription: `@yucchiy_の備忘録。気になった技術などについてまとめます。`,
    twitterCard: `@yucchiy_`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [

    `gatsby-plugin-graphql-codegen`,

    // for markdown file system
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/articles/`
      }
    },

    // for images
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaptions: true,
              markdownCaptions: true,
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `header-link`
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: null,
              noInlineHighlight: true,
            }
          },
          'gatsby-remark-copy-linked-files',
        ]
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge:any)=> {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            title: "Yucchiy's Note",
            output: "/rss.xml",
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`
      }
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-36940311-7`,
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`
  ],
}

export default config
