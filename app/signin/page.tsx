"use client";

import { useState } from "react";
import { Info, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  AppleLogo,
  AtlassianLogo,
  GoogleLogo,
  MicrosoftLogo,
  SlackLogo,
  TrelloIcon,
} from "@/constants/Logos";

const SignIn = () => {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen w-full bg-linear-to-b from-background to-background/20 relative overflow-hidden">
      <div className="hidden lg:block absolute left-0 bottom-0 w-[368px] h-[400px]">
        <Image
          src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/trello-left.4f52d13c.svg"
          alt=""
          width={368}
          height={400}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="hidden lg:block absolute right-0 bottom-0 w-[368px] h-[400px]">
        <Image
          src="https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/trello-right.e6e102c7.svg"
          alt=""
          width={368}
          height={400}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-[400px] bg-background shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <TrelloIcon />
          </div>

          <h1 className="text-center text-foreground text-base font-semibold mb-6">
            Log in to continue
          </h1>

          <div className="mb-4">
            <Label
              htmlFor="email"
              className="block text-sm font-semibold text-foreground/70 mb-1"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-2 text-sm rounded-none h-10"
            />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Checkbox
              id="remember"
              className="w-4 h-4 rounded"
            />
            <Label
              htmlFor="remember"
              className="text-sm text-foreground flex items-center gap-1"
            >
              Remember me
              <Info className="w-4 h-4 text-primary" />
            </Label>
          </div>

          <Button className="w-full bg-primary text-primary-foreground font-medium py-5 rounded cursor-pointer transition-colors mb-4">
            Continue
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-ring/50"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-background text-foreground/75">
                Or continue with:
              </span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 py-5 rounded-none cursor-pointer"
            >
              <GoogleLogo />
              <span className="text-sm font-semibold text-foreground/80">
                Google
              </span>
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 py-5 rounded-none cursor-pointer"
            >
              <MicrosoftLogo />
              <span className="text-sm font-semibold text-foreground/80">
                Microsoft
              </span>
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 py-5 rounded-none cursor-pointer"
            >
              <AppleLogo />
              <span className="text-sm font-semibold text-foreground/80">
                Apple
              </span>
            </Button>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-3 py-5 rounded-none cursor-pointer"
            >
              <SlackLogo />
              <span className="text-sm font-semibold text-foreground/80">
                Slack
              </span>
            </Button>
          </div>

          <div className="text-center text-sm text-foreground mb-4 border-b border-border pb-6">
            <Link href="#" className="text-primary hover:underline">
              Can&apos;t log in?
            </Link>
            <span className="mx-2 text-foreground/70">•</span>
            <Link href="#" className="text-primary hover:underline">
              Create an account
            </Link>
          </div>

          <footer className="pt-2 px-4 text-center">
            <div className="flex flex-col mb-1">
              <AtlassianLogo />
            </div>
            <p className="flex gap-1 text-xs text-center text-foreground mb-2">
              One account for Trello, Jira, Confluence and{" "}
              <Link
                href="#"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                more
                <SquareArrowOutUpRight size={12} />
              </Link>
              .
            </p>
            <div className="flex justify-center gap-3 text-xs text-foreground">
              <Link
                href="#"
                className="flex items-center gap-1 hover:underline text-primary"
              >
                Privacy Policy <SquareArrowOutUpRight size={12} />
              </Link>
              <span>•</span>
              <Link
                href="#"
                className="flex items-center gap-1 hover:underline text-primary"
              >
                User Notice <SquareArrowOutUpRight size={12} />
              </Link>
            </div>
            <div className="text-xs text-foreground mt-2">
              <p>This site is protected by reCAPTCHA and the Google{" "}</p>
              <div className="flex items-center gap-1">
                <Link
                  href="#"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  Privacy Policy <SquareArrowOutUpRight size={12} />
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="flex items-center gap-1 text-primary hover:underline"
                >
                  Terms of Service <SquareArrowOutUpRight size={12} />
                </Link>{" "}
                apply.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
