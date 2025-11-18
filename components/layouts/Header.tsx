import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TrelloLogo } from "@/constants/TrelloLogo";
import Link from "next/link";
import { Button } from "../ui/button";
import { LucideIcon, Menu } from "lucide-react";
import { dropdownContent, navOrder } from "@/constants";

export default function Header() {

  return (
    <header className="flex items-center justify-between shadow-lg z-9999 px-3">
      <div className="flex items-center gap-6">
        <Link className="py-2" href="/">
          <TrelloLogo />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block max-w-dvw w-full">
          <NavigationMenuList className="flex gap-2">
            {navOrder.map((item) => {
              if (item.type === "dropdown") {
                const key = item.key;
                const items = dropdownContent[key];

                return (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger className="text-foreground hover:text-primary text-base font-medium data-[state=open]:text-primary">
                      {item.key}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="left-0! right-0! w-dvw!">
                      <ul className="grid grid-cols-3 gap-4 p-6 text-left">
                        {items.map((menuItem, index) => {
                          const Icon = menuItem.icon as LucideIcon | null;

                          return (
                            <li key={index}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/" // Replace with actual links lat
                                  className="block rounded-lg p-4 hover:bg-accent/50 transition-colors group"
                                >
                                  <div className="flex items-center gap-2 mb-1">
                                    {Icon && (
                                      <div className="text-primary group-hover:text-primary/90">
                                        <Icon size={20} aria-hidden="true" />
                                      </div>
                                    )}
                                    <h3 className="text-base font-semibold text-foreground">
                                      {menuItem.title}
                                    </h3>
                                  </div>
                                  <p className="text-xs text-muted-foreground leading-relaxed">
                                    {menuItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              if (item.type === "link") {
                return (
                  <NavigationMenuItem key={item.key}>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} hover:bg-transparent text-foreground hover:text-primary text-base font-medium`}
                    >
                      <Link href={item.href}>{item.key}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              }

              return null;
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <Button
          className="bg-transparent text-foreground hover:text-primary cursor-pointer text-base hover:bg-transparent shadow-none"
          asChild
        >
          <Link href="#">Login</Link>
        </Button>
        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-8 rounded-none transition-colors"
          asChild
        >
          <Link href="#">Get Trello for free</Link>
        </Button>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="pt-12">
          <nav className="flex flex-col gap-5 text-lg font-medium">
            <Link href="/features" className="hover:text-primary">
              Features
            </Link>
            <Link href="/solutions" className="hover:text-primary">
              Solutions
            </Link>
            <Link href="/plans" className="hover:text-primary">
              Plans
            </Link>
            <Link href="/pricing" className="hover:text-primary font-semibold">
              Pricing
            </Link>
            <Link href="/resources" className="hover:text-primary">
              Resources
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
