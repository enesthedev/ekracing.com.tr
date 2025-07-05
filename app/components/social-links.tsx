interface SocialLinksProps {
  socialLinks: SocialLink[];
}

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: string; // For future icon implementation
}

export function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300"
          aria-label={`Follow us on ${social.name}`}
        >
          <span className="text-white text-xs font-bold font-oxanium">
            {social.name.charAt(0).toUpperCase()}
          </span>
        </a>
      ))}
    </div>
  );
}
