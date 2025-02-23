const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions

  // Get all MDX posts
  const result = await graphql(`
    {
      allMdx(sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            id
            frontmatter {
              title
              tags
            }
            internal {
              contentFilePath
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  const posts = result.data.allMdx.edges

  // Create blog posts pages
  posts.forEach(({ node }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: node.fields.slug,
      component: `${path.resolve(`./src/templates/blogPostTemplate.js`)}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        slug: node.fields.slug,
        previous,
        next,
      },
    })
  })

  createTagPages(posts, createPage)
  createRedirectFile(createRedirect)
}

function createTagPages(posts, createPage) {
  const tagTemplate = path.resolve(`./src/templates/tagsTemplate.js`)

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}

function createRedirectFile(createRedirect) {
  createRedirect({
    fromPath: 'https://blog.aaron-lau.com/',
    toPath: 'https://aaron-lau.com/blog',
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: 'https://blog.aaron-lau.com/contact/',
    toPath: 'https://aaron-lau.com/contact/',
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: 'https://blog.aaron-lau.com/tags/',
    toPath: 'https://aaron-lau.com/tags/',
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: 'https://blog.aaron-lau.com/*',
    toPath: 'https://aaron-lau.com/:splat',
    isPermanent: true,
    force: true,
  })
}