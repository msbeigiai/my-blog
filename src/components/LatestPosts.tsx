// src/components/LatestPosts.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Post } from "@/types/post";
import { getAllPosts } from "@/utils/markdown";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getAllPosts();
        // Get the latest 2 posts
        setPosts(allPosts.slice(0, 2));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
        <div className="grid gap-4">
          {[1, 2].map((index) => (
            <Card key={index} className="border bg-card">
              <CardContent className="p-6">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 space-y-6">
      <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/posts/${post.slug}`}
            className="block transition-colors"
          >
            <Card className="border bg-card hover:bg-accent/50">
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <h3 className="text-lg font-medium mb-2">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/posts">
          <Button variant="outline" className="cursor-pointer">
            View All Posts
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LatestPosts;
