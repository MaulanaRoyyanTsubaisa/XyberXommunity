
import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.partners": "Partners",
    "nav.join": "Join Us",
    
    // Hero Section
    "hero.title": "Where Tech Minds Connect",
    "hero.subtitle": "A community of innovators, creators, and tech enthusiasts building the digital future together",
    "hero.cta": "Learn More",
    
    // About Section
    "about.title": "About XyberXomunnity",
    "about.description": "XyberXomunnity is a vibrant tech community fostering innovation, collaboration, and growth in the digital space. We bring together passionate individuals to share knowledge, develop skills, and create groundbreaking solutions.",
    "about.mission": "Our mission is to create an inclusive tech ecosystem that empowers individuals to explore new technologies, collaborate on innovative projects, and shape the future of the digital world.",
    
    // Partners Section
    "partners.title": "Our Partners",
    "partners.subtitle": "Collaborating with the best in tech",
    
    // Join Section
    "join.title": "Become a Member",
    "join.description": "Join our community of tech enthusiasts and innovators",
    "join.name": "Name",
    "join.email": "Email",
    "join.message": "Why do you want to join?",
    "join.submit": "Submit Application",
    "join.success": "Thanks for your interest! We'll be in touch soon.",
    
    // Footer
    "footer.rights": "© 2025 XyberXomunnity. All rights reserved.",
    "footer.contact": "Contact Us",
    "footer.address": "123 Tech Street, Digital City, 10101",
    "footer.email": "hello@xyberxomunnity.com",
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.partners": "Mitra",
    "nav.join": "Bergabung",
    
    // Hero Section
    "hero.title": "Di Mana Para Ahli Teknologi Terhubung",
    "hero.subtitle": "Sebuah komunitas inovator, kreator, dan penggemar teknologi yang bersama-sama membangun masa depan digital",
    "hero.cta": "Pelajari Lebih Lanjut",
    
    // About Section
    "about.title": "Tentang XyberXomunnity",
    "about.description": "XyberXomunnity adalah komunitas teknologi yang dinamis yang mendorong inovasi, kolaborasi, dan pertumbuhan di ruang digital. Kami menyatukan individu-individu yang penuh semangat untuk berbagi pengetahuan, mengembangkan keterampilan, dan menciptakan solusi terobosan.",
    "about.mission": "Misi kami adalah menciptakan ekosistem teknologi inklusif yang memberdayakan individu untuk mengeksplorasi teknologi baru, berkolaborasi dalam proyek inovatif, dan membentuk masa depan dunia digital.",
    
    // Partners Section
    "partners.title": "Mitra Kami",
    "partners.subtitle": "Berkolaborasi dengan yang terbaik di bidang teknologi",
    
    // Join Section
    "join.title": "Menjadi Anggota",
    "join.description": "Bergabunglah dengan komunitas penggemar teknologi dan inovator kami",
    "join.name": "Nama",
    "join.email": "Email",
    "join.message": "Mengapa Anda ingin bergabung?",
    "join.submit": "Kirim Aplikasi",
    "join.success": "Terima kasih atas minat Anda! Kami akan segera menghubungi Anda.",
    
    // Footer
    "footer.rights": "© 2025 XyberXomunnity. Seluruh hak dilindungi.",
    "footer.contact": "Hubungi Kami",
    "footer.address": "123 Jalan Teknologi, Kota Digital, 10101",
    "footer.email": "hello@xyberxomunnity.com",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
