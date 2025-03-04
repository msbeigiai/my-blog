import { Button } from "@/components/ui/button"; // Assuming you're using Shadcn's button component
import { Separator } from "@/components/ui/separator"; // Assuming you're using Shadcn's separator component
import { Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-10 mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-muted-foreground">
              Welcome to my blog! Here, I share insights, tutorials, and tips on
              web development, design, and technology.
            </p>
            <div className="mt-4 flex gap-4">
              {/* Social Media Links */}
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com/msbeigiai">
                  <Twitter className="size-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/msbeigiai">
                  <Github className="size-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-me" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/posts" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to My Newsletter
            </h3>
            <form
              action="#"
              className="flex flex-col sm:flex-row gap-2 max-w-sm"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" className="w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <Separator className="my-8" />
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mohsen Sadeghbeigi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
