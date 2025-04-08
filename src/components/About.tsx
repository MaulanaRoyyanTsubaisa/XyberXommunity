
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section bg-muted/50">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              {t("nav.about")}
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">{t("about.title")}</h2>
            <p className="text-muted-foreground">{t("about.description")}</p>
          </div>
          
          <div className="bg-background border rounded-lg p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-10 w-1 bg-primary rounded-full"></div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground">{t("about.mission")}</p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-muted rounded-md p-4 text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Members</div>
              </div>
              <div className="bg-muted rounded-md p-4 text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="bg-muted rounded-md p-4 text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="bg-muted rounded-md p-4 text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
