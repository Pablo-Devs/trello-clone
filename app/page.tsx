"use client";

import Hero from "@/components/sections/Hero";
import Link from "next/link";

const Page = () => {
  return (
    <main>
      <div className="bg-chart-1/20 w-full py-4 px-8">
        <p className="text-base text-foreground/80 font-medium text-center">
          Accelerate your teams&apos; work with Atlassian Intelligence (AI)
          features 🤖 now available for all Premium and Enterprise!{" "}
          <Link href="" className="text-primary underline">
            Learn more.
          </Link>
        </p>
      </div>
      {/* Hero Section */}
      <Hero />
      <section className="bg-background py-4 px-4 md:py-6 md:px-6 lg:px-[120px]">
        <header className="p-2 text-foreground/80 max-w-full md:max-w-[419px] lg:max-w-[650px]">
          <p className="text-base text-foreground font-semibold mb-2">
            TRELLO 101
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold pb-4 mb-2">
            Your productivity powerhouse
          </h2>
          <p className="text-lg md:text-xl text-medium">
            Stay organized and efficient with Inbox, Boards, and Planner. Every
            to-do, idea, or responsibility—no matter how small—finds its place,
            keeping you at the top of your game.
          </p>
        </header>
        <div className="pt-4 pb-10 px-4">
          <div className=""></div>
        </div>
      </section>
    </main>
  );
};

export default Page;
