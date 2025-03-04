import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { Github, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex h-16 items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
            >
              MSBEIGI
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/70 hover:text-foreground">
                    Articles
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Featured Post
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Check out our latest article on web development
                              best practices.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Latest
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Recent publications and updates
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/70 hover:text-foreground">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Technology
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              Design
                            </div>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <Link to={"/about-me"}>
                    <Button
                      variant="ghost"
                      className="text-foreground/70 hover:text-foreground cursor-pointer"
                    >
                      About
                    </Button>
                  </Link>
                </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to={"/contact-me"}>
                <Button variant="ghost" className="text-foreground/70 hover:text-foreground cursor-pointer">Contact Me</Button>
                </Link>
              </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-8 w-64 bg-muted/50"
              />
            </div>
            <ModeToggle />

            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:bg-accent"
            >
              <a
                href="https://github.com/msbeigiai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-accent"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden py-4">
          <div className="container mx-auto px-4">
            <div className="space-y-4">
              {/* <a
                href="#"
                className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
              >
                Articles
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
              >
                Categories
              </a> */}
              <a
                href="#"
                className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
              >
                About
              </a>
              <div className="relative px-4">
                <Search className="absolute left-6 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-8 w-full bg-muted/50"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
