import profilePic from "@/assets/pic.png";
import { Button } from "@/components/ui/button";
import { Github, LinkedinIcon, Twitter } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-64px)] flex items-center">
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Profile section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            {/* Profile image */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500/20">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Intro text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 flex flex-col">
                Hey, I'm{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2.5 pb-2">
                  Mohsen Sadeghbeigi
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Full stack developer passionate about Java, Scala, Kafka, C++,
                React, Redux, UI/UX, and creating delightful web experiences. I
                write about web development, design patterns, and my journey in
                tech.
              </p>

              {/* Social links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <Button
                  variant="link"
                  size="icon"
                  className="hover:text-purple-400"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-purple-400"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-purple-400"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Latest posts preview */}
          <div className="mt-12 space-y-6">
            <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
            <div className="grid gap-4">
              {[1, 2].map((post) => (
                <a
                  key={post}
                  href="#"
                  className="block p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
                >
                  <div className="text-sm text-muted-foreground mb-2">
                    Jan {post}, 2024
                  </div>
                  <h3 className="text-lg font-medium mb-2">
                    Understanding React Server Components
                  </h3>
                  <p className="text-muted-foreground">
                    Exploring the future of React and how server components are
                    changing the game...
                  </p>
                </a>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to={"/posts"}>
                <Button variant="outline">View All Posts</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default Hero;
