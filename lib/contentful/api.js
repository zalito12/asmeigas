import {
  BLOG_ITEM_GRAPHQL_FIELDS,
  HOMEPAGE_GRAPHQL_FIELDS,
  PAGES_GRAPHQL_FIELDS,
  BLOG_POST_GRAPHQL_FIELDS,
  EVENT_ITEM_GRAPHQL_FIELDS,
  EVENT_GRAPHQL_FIELDS,
  GEAR_GRAPHQL_FIELDS,
  PLAN_GRAPHQL_FIELDS,
} from "./models";

const b = (isDraftMode) => {
  return isDraftMode ? "true" : "false";
};

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
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags },
    },
  ).then((response) => response.json());
}

/* function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.homepageCollection?.items;
} */

export async function getHomePage(isDraftMode = false) {
  const pages = await fetchGraphQL(
    `query {
        homepageCollection(where:{}, order: sys_publishedAt_DESC, limit: 1, preview: ${b(
          isDraftMode,
        )}) {
          items {
            ${HOMEPAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
    ["homepage", "sponsor", "testimonial"],
    isDraftMode,
  );
  return pages?.data?.homepageCollection?.items[0];
}

export async function getPages(isDraftMode = false) {
  const pages = await fetchGraphQL(
    `query {
          websitePageCollection(where:{}, order: order_ASC, preview:  ${b(
            isDraftMode,
          )}) {
          items {
            ${PAGES_GRAPHQL_FIELDS}
          }
        }
      }`,
    ["websitePage"],
    isDraftMode,
  );
  return pages?.data?.websitePageCollection?.items;
}

export async function getPage(slug = "/", isDraftMode = false) {
  const pages = await fetchGraphQL(
    `query {
          websitePageCollection(where:{slug: "${slug}"}, preview:  ${b(
            isDraftMode,
          )}) {
          items {
            ${PAGES_GRAPHQL_FIELDS}
          }
        }
      }`,
    [`websitePage-${slug}`],
    isDraftMode,
  );
  return pages?.data?.websitePageCollection?.items[0];
}

export async function getBlogPosts(limit = 4, skip = 0, isDraftMode = false) {
  const pages = await fetchGraphQL(
    `query {
          blogPageCollection(where:{}, limit: ${limit}, skip: ${skip}, preview:  ${b(
            isDraftMode,
          )}) {
          total,
          items {
            ${BLOG_ITEM_GRAPHQL_FIELDS}
          }
        }
      }`,
    [`blogPage`],
    isDraftMode,
  );
  const data = pages?.data?.blogPageCollection;
  return { total: data?.total ?? 0, posts: data?.items ?? [] };
}

export async function getBlogPost(slug, isDraftMode = false) {
  const post = await fetchGraphQL(
    `query {
        blogPageCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${BLOG_POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    [`blogPage-${slug}`],
    isDraftMode,
  );
  return post?.data?.blogPageCollection?.items[0];
}

export async function getNextEvents(limit = 3, isDraftMode = false) {
  const now = new Date(new Date().getMilliseconds() + 1 * 24 * 60 * 60 * 1000);
  const events = await fetchGraphQL(
    `query {
      eventCollection(
        where: {date_gte: "${now.toISOString()}"}
        order: date_ASC
        limit: ${limit}
        preview:  ${b(isDraftMode)}
      ) {
          items {
            ${EVENT_ITEM_GRAPHQL_FIELDS}
          }
        }
      }`,
    [`event`],
    isDraftMode,
  );
  return events?.data?.eventCollection?.items;
}

export async function getEvent(slug, isDraftMode = false) {
  const post = await fetchGraphQL(
    `query {
        eventCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${EVENT_GRAPHQL_FIELDS}
          }
        }
      }`,
    [`event-${slug}`],
    isDraftMode,
  );
  return post?.data?.eventCollection?.items[0];
}

export async function getGear(isDraftMode = false) {
  const gear = await fetchGraphQL(
    `query {
          gearCollection(limit: 10, order: order_ASC, preview:  ${b(
            isDraftMode,
          )}) {
          items {
            ${GEAR_GRAPHQL_FIELDS}
          }
        }
      }`,
    ["gear"],
    isDraftMode,
  );
  return gear?.data?.gearCollection?.items;
}

export async function getPlans(isDraftMode = false) {
  const gear = await fetchGraphQL(
    `query {
          subscriptionCollection(limit: 10, order: order_ASC, preview:  ${b(
            isDraftMode,
          )}) {
          items {
            ${PLAN_GRAPHQL_FIELDS}
          }
        }
      }`,
    ["subscription"],
    isDraftMode,
  );
  return gear?.data?.subscriptionCollection?.items;
}

export async function getRules(isDraftMode = false) {
  const rules = await fetchGraphQL(
    `{
  asset(id: "3WfQ5wRKqA2lN19T2SEDTH") {
    sys {
      id
    }
    title
    description
    url
    size
  }
}`,
    [],
    isDraftMode,
  );
  // console.log(rules);
  return rules?.data?.asset;
}

export default {
  getHomePage,
  getPages,
  getPage,
  getBlogPosts,
  getNextEvents,
  getEvent,
  getPlans,
  getRules,
};
