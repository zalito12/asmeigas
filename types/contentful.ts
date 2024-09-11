export interface ContentfulImage {
  url: string;
  title: string;
  width?: number;
  height?: number;
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
export interface Event {
  sys: {
    id: string;
  };
  title: string;
  image: ContentfulImage;
  summary: string;
  slug: string;
  date: any;
  description?: any;
  location?: any;
  documentsCollection?: { items: Document[] };
}
export interface Document {
  title: string;
  url: string;
  size: number;
}
