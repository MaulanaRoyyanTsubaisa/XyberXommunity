
import { useLanguage } from "@/context/LanguageContext";

const Partners = () => {
  const { t } = useLanguage();

  // Sample partner logos
  const partners = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLabs", logo: "IL" },
    { name: "ByteForge", logo: "BF" },
    { name: "QuantumData", logo: "QD" },
    { name: "CoreSystems", logo: "CS" },
    { name: "NexusAI", logo: "NX" },
    { name: "DigitalFrontier", logo: "DF" },
    { name: "FusionTech", logo: "FT" },
  ];

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section id="partners" className="section">
      <div className="container-tight mb-10">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            {t("nav.partners")}
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">{t("partners.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("partners.subtitle")}
          </p>
        </div>
      </div>

      <div className="marquee-container w-full overflow-hidden">
        <div className="marquee-content flex">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`} 
              className="mx-8 flex-shrink-0 h-24 w-40 rounded-lg border bg-background flex items-center justify-center"
            >
              <div className="text-2xl font-bold text-primary/70">{partner.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
