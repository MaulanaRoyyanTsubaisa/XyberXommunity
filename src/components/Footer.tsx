
import { useLanguage } from "@/context/LanguageContext";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" },
  ];

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Partners", href: "#partners" },
    { name: "Join Us", href: "#join" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container-tight py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">XyberXomunnity</h3>
            <p className="text-muted-foreground max-w-xs">
              A vibrant community of tech enthusiasts and innovators building the future together.
            </p>
            
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  aria-label={link.label}
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-background border hover:bg-primary/10 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">{t("footer.contact")}</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>{t("footer.address")}</p>
              <p>
                <a href="mailto:hello@xyberxomunnity.com" className="hover:text-primary">
                  {t("footer.email")}
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 text-center text-sm text-muted-foreground">
          {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
