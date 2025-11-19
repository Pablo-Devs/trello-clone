import { footerNavLinks, socialMediaLinks } from "@/constants";
import { TrelloWhiteLogo } from "@/constants/TrelloLogo";
import { Globe, LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="w-full bg-[#172b4d] text-background flex flex-col">
      <section className="pt-4 pb-8 px-4 lg:px-[120px] lg:pt-4 lg:pb-4 flex flex-col lg:flex-row space-x-4 lg:space-x-8">
        <div className="flex flex-row lg:flex-col justify-between lg:justify-start">
          <div className="mb-6">
            <TrelloWhiteLogo />
          </div>
          <Link
            href="/signin"
            className="text-background text-base font-semibold"
          >
            Log In
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          {footerNavLinks.map((item, index) => (
            <Link
              href={item.link}
              className="lg:max-w-52 lg:w-full pl-2 py-4 lg:pl-4 lg:py-6 hover:bg-ring/20 border-t border-border/20 lg:border-none"
              key={index}
            >
              <p className="text-sm lg:text-base font-semibold mb-2">
                {item.title}
              </p>
              <p className="text-xs font-medium">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="pt-4 pb-8 px-4 lg:px-[120px] lg:pt-4 lg:pb-4 flex flex-col lg:flex-row gap-10 border-t border-border/30">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          <div className="flex flex-col md:flex-row gap-3">
            <div>
              <Globe />
            </div>
            <Select>
              <SelectTrigger className="w-[150px] rounded-none text-secondary">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ghana">Ghana</SelectItem>
                <SelectItem value="Ethiopia">Ethiopia</SelectItem>
                <SelectItem value="Egypt">Egypt</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <Link
              href="/notice"
              className="text-xs lg:text-sm font-semibold hover:underline transition-all duration-300"
            >
              Notice at Collection
            </Link>
            <Link
              href="/privacy-policy"
              className="text-xs lg:text-sm font-semibold hover:underline transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs lg:text-sm font-semibold hover:underline transition-all duration-300"
            >
              Terms
            </Link>
            <Link
              href="/notice"
              className="text-xs lg:text-sm font-semibold hover:underline transition-all duration-300"
            >
              Copyright &copy; { currentYear } Atlassian
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {socialMediaLinks.map((social, index) => {
            const Icon = social.icon as LucideIcon;
            return (
              <Link
                href={social.link}
                key={index}
                className="border-2 border-border rounded-full p-2"
              >
                <Icon size={14} />
              </Link>
            );
          })}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
