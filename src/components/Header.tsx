
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage, Language } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  const navItems = [
    { href: "#hero", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#partners", label: t("nav.partners") },
    { href: "#join", label: t("nav.join") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-tight flex justify-between items-center h-16">
        <div className="flex items-center">
          <span className="text-lg font-bold text-primary">XyberXomunnity</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2 sr-only">
                {language === "en" ? "Switch to Bahasa" : "Switch to English"}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full"
          >
            <Globe className="h-5 w-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="rounded-full"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 md:hidden">
          <nav className="container-tight py-8 bg-background">
            <ul className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-lg font-medium block py-2 bg-background"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
