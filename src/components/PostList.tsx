import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Post } from "../types/post";

interface PostsListProps {
  posts: Post[];
}

const PostsList = ({ posts }: PostsListProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="group overflow-hidden border-muted hover:border-primary/50 transition-all duration-300"
          >
            <div className="relative overflow-hidden aspect-[16/9]">
              <img
                src={post.coverImage}
                alt={post.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h2>

              <p className="text-muted-foreground line-clamp-3">
                {post.excerpt}
              </p>
            </CardContent>

            <CardFooter className="px-6 pb-6 pt-0">
              <Button
                variant="ghost"
                className="group/button pl-0 hover:pl-2 transition-all duration-300"
                asChild
              >
                <Link to={`/posts/${post.slug}`}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/button:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
