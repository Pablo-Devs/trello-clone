"use client"

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
      
    </main>
  );
};

export default Page;
