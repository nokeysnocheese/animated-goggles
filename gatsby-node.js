exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(
      `
        {
          articles: allStrapiEdition{
            edges {
              node {
                strapiId
                slug
              }
            }
          }

          stories: allStrapiArticle{
            edges {
              node {
                strapiId
                slug
              }
            }
          }

          posts: allStrapiPost{
            edges {
              node {
                strapiId
                slug
              }
            }
          }

          categories: allStrapiCategory {
            edges {
              node {
                strapiId
                slug
              }
            }
          }

          jobs: allStrapiJob{
            edges {
              node {
                strapiId
                slug
              }
            }
          }

          guides: allStrapiGuide{
            edges {
              node {
                strapiId
                slug
              }
            }
          }

          events: allStrapiEvent{
            edges {
              node {
                strapiId
                slug
              }
            }
          }

          partners: allStrapiPartner{
            edges {
              node {
                strapiId
                slug
              }
            }
          }
        }
      `
    );
  
    if (result.errors) {
      throw result.errors;
    }
  
    // Create blog articles pages.
    const articles = result.data.articles.edges;
    const categories = result.data.categories.edges;
    const stories = result.data.stories.edges;
    const posts = result.data.posts.edges;
    const jobs = result.data.jobs.edges;
    const events = result.data.events.edges;
    const guides = result.data.guides.edges;
    const partners = result.data.partners.edges;
  
    const ArticleTemplate = require.resolve("./src/templates/article.js");
  
    articles.forEach((article, index) => {
      createPage({
        path: `/article/${article.node.slug}`,
        component: ArticleTemplate,
        context: {
          slug: article.node.slug,
        },
      });
    });

    const PostTemplate = require.resolve("./src/templates/post.js");
  
    posts.forEach((post, index) => {
      createPage({
        path: `/post/${post.node.slug}`,
        component: PostTemplate,
        context: {
          slug: post.node.slug,
        },
      });
    });

    const StoryTemplate = require.resolve("./src/templates/story.js");
  
    stories.forEach((story, index) => {
      createPage({
        path: `/story/${story.node.slug}`,
        component: StoryTemplate,
        context: {
          slug: story.node.slug,
        },
      });
    });

    const GuideTemplate = require.resolve("./src/templates/guide.js");
  
    guides.forEach((guide, index) => {
      createPage({
        path: `/guide/${guide.node.slug}`,
        component: GuideTemplate,
        context: {
          slug: guide.node.slug,
        },
      });
    });
  
    const CategoryTemplate = require.resolve("./src/templates/category.js");
  
    categories.forEach((category, index) => {
      createPage({
        path: `/category/${category.node.slug}`,
        component: CategoryTemplate,
        context: {
          slug: category.node.slug,
        },
      });
    });

  const JobTemplate = require.resolve("./src/templates/job.js");
  
    jobs.forEach((job, index) => {
      createPage({
        path: `/jobs/${job.node.slug}`,
        component: JobTemplate,
        context: {
          slug: job.node.slug,
        },
      });
    });


  const EventTemplate = require.resolve("./src/templates/event.js");
  
    events.forEach((event, index) => {
      createPage({
        path: `/events-in-northwest-arkansas/${event.node.slug}`,
        component: EventTemplate,
        context: {
          slug: event.node.slug,
        },
      });
    });
    

    const PartnerTemplate = require.resolve("./src/templates/partner.js");
  
    partners.forEach((partner, index) => {
      createPage({
        path: `/partner/${partner.node.slug}`,
        component: PartnerTemplate,
        context: {
          slug: partner.node.slug,
        },
      });
    });

  };
  
  module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
    const crypto = require(`crypto`);
  
    if (node.internal.type === "StrapiEdition") {
      const newNode = {
        id: createNodeId(`StrapiEdition-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          content: node.posts.map(post => {
            return post.title
        }).join(',') || " ",
          type: "Edition",
          mediaType: "text/markdown",
          contentDigest: crypto
            .createHash("md5")
            .update(node.posts.map(post => {
                return post.title
            }).join(',') || " ")
            .digest("hex"),
        },
      };
      actions.createNode(newNode);
      actions.setWebpackConfig({
        node: {
          net: 'empty',      
          fs: 'empty',
          tls: 'empty'
        }
      })
      actions.createParentChildLink({
        parent: node,
        child: newNode,
      });
    }
  };

 
    
  
