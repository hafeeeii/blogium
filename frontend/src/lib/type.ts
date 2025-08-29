export interface Author {
  name: string;
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: string;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt?: Date;
  author: Author;
}
