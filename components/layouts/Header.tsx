import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
        <NavigationMenu className="hidden lg:block">
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
                    <NavigationMenuContent className="overflow-visible! grid grid-cols-[2fr_1fr]">
                      <div className="px-8 pt-8 pb-19 flex flex-col gap-2">
                        <h3 className="text-foreground text-base font-bold border-b border-secondary-foreground/90 pb-4 mb-2">
                          Explore the features that help your team succeed
                        </h3>
                        <ul className="grid grid-cols-3 gap-4 text-left">
                          {items.map((menuItem, index) => {
                            const Icon = menuItem.icon as LucideIcon | null;
                            return (
                              <li key={index}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/"
                                    className="block rounded-lg p-4 hover:bg-amber-50 transition-colors group"
                                  >
                                    <div className="flex items-center gap-2 mb-1">
                                      {Icon && (
                                        <div className="text-primary group-hover:text-primary/90">
                                          <Icon size={20} aria-hidden="true" />
                                        </div>
                                      )}
                                      <h3 className="text-base font-semibold text-muted-foreground">
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
                      </div>
                      <div className="px-8 pt-8 pb-19 bg-accent">
                        <div className="flex flex-col p-4 max-w-[300px] w-full">
                          <h3 className="text-foreground text-base border-b border-secondary-foreground/90 pb-4 mb-4">
                            Meet Trello
                          </h3>
                          <p className="text-foreground/90 text-xs mb-4">
                            Trello makes it easy for your team to get work done.
                            No matter the project, workflow, or type of team,
                            Trello can help keep things organized. It’s simple –
                            sign-up, create a board, and you’re off!
                            Productivity awaits.
                          </p>
                          <Link
                            href=""
                            className="text-sm text-foreground font-semibold border border-primary hover:bg-blue-100 p-3 max-w-[134px]"
                          >
                            Check out Trello
                          </Link>
                        </div>
                      </div>
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
          <SheetHeader className="hidden">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only"></SheetDescription>
          </SheetHeader>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger></NavigationMenuTrigger>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </header>
  );
}
