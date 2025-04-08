
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="section pt-32 min-h-screen flex items-center">
      <div className="container-tight text-center">
        <div className="animate-fade-in space-y-6">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 mb-4">
            <span className="text-xs font-medium">Tech Community</span>
            <div className="mx-2 h-1 w-1 rounded-full bg-primary"></div>
            <span className="text-xs">Est. 2025</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h1>
          
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground">
            {t("hero.subtitle")}
          </p>
          
          <div className="pt-6">
            <Button size="lg" className="rounded-full" asChild>
              <a href="#about">
                {t("hero.cta")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <div className="mt-24 md:mt-32 opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto animate-bounce"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
