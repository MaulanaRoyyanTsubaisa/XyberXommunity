
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Partners from "@/components/Partners";
import JoinForm from "@/components/JoinForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Hero />
            <About />
            <Partners />
            <JoinForm />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
