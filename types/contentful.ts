export interface ContentfulImage {
  url: string;
  title: string;
}

export interface BlogPost {
  sys: {
    id: string;
    firstPublishedAt: string;
  };
  title: string;
  image: ContentfulImage;
  showImageAsHeader: boolean;
  instagramUrl: string;
  slug: string;
  body?: any;
}
