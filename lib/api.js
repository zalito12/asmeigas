// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed
const HOMEPAGE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  heroTitle
  heroText { json }
  heroImage {
    title
    url
  }
  callToAction1
  callToAction2
  testimonialsTitle
  testimonialsDescription { json }
  testimonials
  eventsTitle
  eventsDescription { json }
  eventsImage {
    title
    url
  }
`;

async function fetchGraphQL(query, tags = [], preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags }
    }
  ).then((response) => response.json());
}

/* function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.homepageCollection?.items;
} */

export async function getHomePage(isDraftMode = false) {
  const pages = await fetchGraphQL(
    `query {
        homepageCollection(where:{}, order: sys_publishedAt_DESC, limit: 1, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${HOMEPAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
    ["homepage"],
    isDraftMode
  );
  return pages?.data?.homepageCollection?.items[0];
}

/* export async function getArticle(slug, isDraftMode = false) {
  const article = await fetchGraphQL(
    `query {
        knowledgeArticleCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${HOMEPAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractArticleEntries(article)[0];
} */

export default { getHomePage };
