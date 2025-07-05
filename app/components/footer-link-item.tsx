import Link from "next/link";

export interface FooterLinkItemProps {
  link: FooterLink;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export function FooterLinkItem({ link }: FooterLinkItemProps) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-white transition-colors duration-300 text-sm leading-relaxed"
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      className="text-white/70 hover:text-white transition-colors duration-300 text-sm leading-relaxed"
    >
      {link.label}
    </Link>
  );
}
