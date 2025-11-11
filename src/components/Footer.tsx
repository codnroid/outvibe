import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Outvibe
            </h3>
            <p className="text-sm text-muted-foreground">
              Your vibe, your style. Discover the latest Gen Z fashion trends.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/shop?category=tops"
                  className="hover:text-primary transition-smooth"
                >
                  Tops
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=bottoms"
                  className="hover:text-primary transition-smooth"
                >
                  Bottoms
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=dresses"
                  className="hover:text-primary transition-smooth"
                >
                  Dresses
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=shoes"
                  className="hover:text-primary transition-smooth"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  to="/shop?category=accessories"
                  className="hover:text-primary transition-smooth"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-smooth"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-smooth"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay in the Loop</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest drops and exclusive deals.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-violet-400 border-0">
                Join
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Outvibe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
