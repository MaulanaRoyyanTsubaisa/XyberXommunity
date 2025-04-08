
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const JoinForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application submitted",
        description: t("join.success"),
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="join" className="section bg-muted/50">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              {t("nav.join")}
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">{t("join.title")}</h2>
            <p className="text-muted-foreground">{t("join.description")}</p>
            
            <div className="pt-4 space-y-2">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m5 13 4 4L19 7"></path>
                  </svg>
                </div>
                <span>Access to exclusive tech events</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m5 13 4 4L19 7"></path>
                  </svg>
                </div>
                <span>Collaborate on innovative projects</span>
              </div>
              
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m5 13 4 4L19 7"></path>
                  </svg>
                </div>
                <span>Network with industry professionals</span>
              </div>
            </div>
          </div>
          
          <div className="bg-background border rounded-lg p-6 md:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  {t("join.name")}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  {t("join.email")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("join.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : t("join.submit")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;
