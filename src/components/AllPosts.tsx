import PostList from "../components/PostList";

const AllPosts = () => {
  const posts = [
    {
      id: 1,
      title: "First Post",
      description: "This is the first post...",
      date: "2023-10-01",
    },
    {
      id: 2,
      title: "Second Post",
      description: "This is the second post...",
      date: "2023-09-25",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default AllPosts;
