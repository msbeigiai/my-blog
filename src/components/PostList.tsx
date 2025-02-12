import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom"; // Use React Router's Link instead of Next.js Link

export interface Post {
  id: number;
  title: string;
  description: string;
  date: string; // Publication date of the post
}

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Published: {new Date(post.date).toLocaleDateString("en-US")}
            </p>
          </CardContent>
          <Separator />
          <footer className="px-4 py-2">
            <Link to={`/post/${post.id}`}>
              {" "}
              {/* Use 'to' prop instead of 'href' */}
              <Button variant="outline" size="sm" className="w-full">
                Read More
              </Button>
            </Link>
          </footer>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
