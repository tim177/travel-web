import Link from "next/link";
import { Menu, Search, User, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-primary"
                >
                  <Leaf className="h-5 w-5" />
                  <span>Wanderlust</span>
                </Link>
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground/80"
                >
                  Home
                </Link>
                <Link
                  href="/tours"
                  className="transition-colors hover:text-foreground/80"
                >
                  Tours
                </Link>
                <Link
                  href="/destinations"
                  className="transition-colors hover:text-foreground/80"
                >
                  Destinations
                </Link>
                <Link
                  href="/about"
                  className="transition-colors hover:text-foreground/80"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-foreground/80"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-primary"
          >
            <Leaf className="h-5 w-5" />
            <span>Wanderlust</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link
            href="/tours"
            className="transition-colors hover:text-foreground/80"
          >
            Tours
          </Link>
          <Link
            href="/destinations"
            className="transition-colors hover:text-foreground/80"
          >
            Destinations
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-foreground/80"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Account">
            <User className="h-5 w-5" />
          </Button>
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
}
