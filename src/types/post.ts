// src/types/post.ts
export interface PostAttributes {
  title: string;
  date: string;
  excerpt?: string;
  coverImage?: string;
  tags?: string[];
}

export interface Post extends PostAttributes {
  slug: string;
  content: string;
  readTime: string;
}
