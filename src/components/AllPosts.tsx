import { useEffect, useState } from "react";
import { getAllPosts } from "../utils/markdown";
import { Post } from "../types/post";
import PostsList from "./PostList";
import { Separator } from "./ui/separator";

const AllPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">Loading...</div>
    );
  }

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 mt-5">All Posts</h1>
          <Separator />
          <PostsList posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
