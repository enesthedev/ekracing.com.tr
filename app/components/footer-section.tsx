import { TextAnimate } from "@/app/components/ui";
import { FooterLink, FooterLinkItem } from "./footer-link-item";

export interface FooterSectionProps {
  section: FooterLinkSection;
}

export interface FooterLinkSection {
  id: string;
  title: string;
  links: FooterLink[];
}

export function FooterSection({ section }: FooterSectionProps) {
  return (
    <div className="space-y-4">
      <TextAnimate
        as="h3"
        animation="fadeIn"
        by="text"
        className="font-oxanium font-bold text-white text-lg uppercase"
      >
        {section.title}
      </TextAnimate>
      <nav className="flex flex-col space-y-3">
        {section.links.map((link) => (
          <FooterLinkItem key={link.id} link={link} />
        ))}
      </nav>
    </div>
  );
}
