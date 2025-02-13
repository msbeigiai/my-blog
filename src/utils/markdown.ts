// src/utils/markdown.ts
import frontMatter from "front-matter";
import { readingTime } from "reading-time-estimator";
import { Post } from "../types/post";

// Dynamically import all markdown files
const markdownFiles = (import.meta as any).glob("/src/content/posts/*.md", {
  as: "raw",
});

export async function getAllPosts(): Promise<Post[]> {
  const posts: Post[] = [];
  for (const path in markdownFiles) {
    const fileContents: string = await markdownFiles[path]();
    const parsed = frontMatter<Post>(fileContents);
    const slug = path.split("/").pop()?.replace(".md", "") || "";

    posts.push({
      slug,
      title: parsed.attributes.title,
      date: parsed.attributes.date,
      content: parsed.body, // Don't render here, just pass the raw markdown
      excerpt: parsed.attributes.excerpt || parsed.body.slice(0, 150) + "...",
      coverImage: parsed.attributes.coverImage || "/api/placeholder/800/400",
      readTime: `${Math.ceil(readingTime(parsed.body).minutes)} min read`,
      tags: parsed.attributes.tags || [],
    });
  }
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = `/src/content/posts/${slug}.md`;
  if (!markdownFiles[filePath]) return null;

  const fileContents: string = await markdownFiles[filePath]();
  const parsed = frontMatter<Post>(fileContents);

  return {
    slug,
    title: parsed.attributes.title,
    date: parsed.attributes.date,
    content: parsed.body, // Don't render here, just pass the raw markdown
    excerpt: parsed.attributes.excerpt || parsed.body.slice(0, 150) + "...",
    coverImage: parsed.attributes.coverImage || "/api/placeholder/800/400",
    readTime: `${Math.ceil(readingTime(parsed.body).minutes)} min read`,
    tags: parsed.attributes.tags || [],
  };
}
