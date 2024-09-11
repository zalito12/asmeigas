export const HOMEPAGE_GRAPHQL_FIELDS = `
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
  testimonialsCollection(limit: 3) {
    items {
      avatar { title url }
      name
      quote
    }
  }
  eventsTitle
  eventsDescription { json }
  eventsImage {
    title
    url
  }
`;

export const PAGES_GRAPHQL_FIELDS = `
  sys {
    id
  }
  slug
  menuTitle
  order
  seoTitle
  seoDescription
`;

export const BLOG_ITEM_GRAPHQL_FIELDS = `
  sys {
    id
    firstPublishedAt
  }
  slug
  title
  image {title url}
`;

export const BLOG_POST_GRAPHQL_FIELDS = `
  sys {
    id
    firstPublishedAt
  }
  slug
  title
  image {title url}
  showImageAsHeader
  instagramUrl
  body {
    json
    links {
      assets { block { sys { id } title url width height } }
    }
  }
`;

export const EVENT_ITEM_GRAPHQL_FIELDS = `
  sys {
    id
  }
  slug
  title
  summary
  date
  image { url title}
`;

export const EVENT_GRAPHQL_FIELDS = `
  sys {
    id
  }
  slug
  title
  summary
  date
  image { url title width height }
  description {
    json
    links {
      assets { block { sys { id } title url width height } }
    }
  }
  location { lat lon }
  documentsCollection {
    items {
      title
      url
      size
    }
  }
`;