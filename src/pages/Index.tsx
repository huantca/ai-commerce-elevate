import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Search, MessageSquare, Target, BarChart3, Users, Zap, Star, ArrowRight, PenTool, Code, Settings, Rocket, Shield, Building2, AlertTriangle, Lightbulb, TrendingUp, Code2, Facebook, Linkedin, BookOpen, Library } from "lucide-react";
import { useState } from "react";
import { caseStudiesData } from "@/components/CaseStudiesData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EbookDialog } from "@/components/EbookDialog";
import { useToast } from "@/hooks/use-toast";
import { ProjectDetails } from "@/components/ProjectDetails";
import ProjectDetailsAttronAI from "@/components/ProjectDetailsAttronAI";

const Index = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [ebookDialogOpen, setEbookDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showProjectDetailsAttron, setShowProjectDetailsAttron] = useState(false);
  const { toast } = useToast();

  // Animation hooks for different sections
  const heroAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const caseStudiesAnimation = useScrollAnimation();
  const processAnimation = useScrollAnimation();
  const resourcesAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/80b908cd-8cc7-4d1b-9b38-800cd7593430.png" alt="BkPlus Logo" className="h-12 w-auto" />
            <div className="flex flex-col py-1 rounded-lg ">
              <span className="text-xl font-bold ">BKPLUS</span>
              <span className="text-sm font-medium">SOFTWARE</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#welcome" className="text-muted-foreground hover:text-primary hover:font-medium transition-colors">Accueil</a>
            <a href="#case-studies" className="text-muted-foreground hover:text-primary hover:font-medium transition-colors">Études de cas</a>
            <a href="#process" className="text-muted-foreground hover:text-primary hover:font-medium transition-colors">Nos Expertises</a>
            <a href="#resources" className="text-muted-foreground hover:text-primary hover:font-medium transition-colors">Avis client</a>
          </nav>
          <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                Prendre rendez-vous
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-cover bg-center min-h-[80vh] flex items-center" style={{ backgroundImage: 'url(/lovable-uploads/bg_hero_section.png)' }}>
        <div className="absolute inset-0"></div>
        {/* AI Image in bottom left corner */}
        <div className="absolute left-20 bottom-20 w-[271px] h-[271px] opacity-90 hover:opacity-100 transition-opacity ">
          <img
            src="/lovable-uploads/img_ai.png"
            alt="AI Technology"
            className="w-full h-full object-contain"
          />
        </div>
        <div ref={heroAnimation.ref} className={`container mx-auto text-center max-w-4xl scroll-animate relative z-10 ${heroAnimation.isVisible ? 'visible' : ''}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">Donnez vie à vos idées Produit & IA</h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-4xl mx-auto px-4">Votre partenaire offshore pour une équipe IA intégrée, agile et économiquement optimisée</p>
          <p className="text-lg mb-4 --muted" style={{ color: '#084298' }}>
            <span className="font-bold">+33 6 50 83 70 77 </span>ou
            <span className="font-bold"> contact@bkplussoft.com </span> — du lundi au vendredi</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
            <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Travaillons ensemble
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>

          {/* Trusted By */}
          <div className="mt-12">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <img
                  src="/lovable-uploads/logo_google.svg"
                  alt="Google"
                  className="h-7 w-auto hover:opacity-100 transition-opacity"
                />
                <div className="flex items-center gap-1.5 mt-3">
                  <span className="text-sm text-muted-foreground">4.5</span>
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFB400] fill-[#FFB400]" />
                  ))}
                  <div className="relative w-4 h-4">
                    <Star className="w-4 h-4 text-gray-300" />
                    <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                      <Star className="w-4 h-4 text-[#FFB400] fill-[#FFB400]" />
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <img
                  src="/lovable-uploads/logo_clutch.svg"
                  alt="Clutch"
                  className="h-7 w-auto hover:opacity-100 transition-opacity"
                />
                <div className="flex items-center gap-1.5 mt-3">
                  <span className="text-sm text-muted-foreground">5.0</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFB400] fill-[#FFB400]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section1 */}
      <section id="welcome" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center text-primary text-sm font-medium whitespace-pre">
                RegTech    |    FinTech    |    B2B
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="/lovable-uploads/img_logo_finance.png"
                  alt="B4FINANCE Logo"
                  className="h-12 w-auto self-center"
                />
                <h2 className="text-5xl md:text-6xl font-bold text-primary">B4FINANCE</h2>
              </div>
              <p className="text-base text-primary/90" style={{ color: '#052C65' }}>
                B4finance est une plateforme SaaS qui exploite l'IA pour automatiser le processus KYC/AML et simplifier les souscriptions aux fonds en éliminant les tâches manuelles et en facilitant la signature des sous-documents. Cela permet aux General Partners de se concentrer sur la relation investisseurs, d'optimiser les opérations et de garantir une conformité réglementaire totale.
              </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => setShowProjectDetails(!showProjectDetails)}
              >
                Voir le projet
                <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${showProjectDetails ? 'rotate-90' : ''}`} />
              </Button>
            </div>

            {/* Right Column - Image */}
            <div className="md:w-1/2 relative">
              <div className="relative overflow-visible">
                <img
                  src="/lovable-uploads/img_laptop.png"
                  alt="B4FINANCE Platform"
                  className="ml-auto max-w-full h-auto object-cover object-left"
                  style={{ maxWidth: '120%', marginRight: '-13%' }}
                />
              </div>
            </div>
          </div>

          {/* Project Details Section - Moved here to appear below the welcome section */}
          <div className="mt-16">
            <ProjectDetails isOpen={showProjectDetails} />
          </div>
        </div>
      </section>

      {/* Case Studies Section2 - AttronAI */}
      <section id="attron-ai" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center text-primary text-sm font-medium whitespace-pre">
                EdTech  |    B2B2C
              </div>
              <div className="flex items-center gap-4">
                {/* <img 
                  src="/lovable-uploads/img_laptop.png" 
                  alt="AttronAI Logo" 
                  className="h-12 w-auto self-center"
                /> */}
                <h2 className="text-5xl md:text-6xl font-bold text-primary">ATTRON AI</h2>
              </div>
              <p className="text-base text-primary/90" style={{ color: '#052C65' }}>
                AttornAI est une plateforme EdTech basée sur l’IA générative qui aide les étudiants à se préparer à l’examen du barreau, tout en proposant également un modèle B2B destiné aux institutions et au monde académique. </p>
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => setShowProjectDetailsAttron(!showProjectDetailsAttron)}
              >
                Voir le projet
                <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${showProjectDetailsAttron ? 'rotate-90' : ''}`} />
              </Button>
            </div>

            {/* Right Column - Image */}
            <div className="md:w-1/2 relative">
              <div className="relative overflow-visible">
                <img
                  src="/lovable-uploads/img_laptop.png"
                  alt="AttronAI Platform"
                  className="ml-auto max-w-full h-auto object-cover object-left"
                  style={{ maxWidth: '120%', marginRight: '-13%' }}
                />
              </div>
            </div>
          </div>

          {/* Project Details Section */}
          <ProjectDetailsAttronAI isOpen={showProjectDetailsAttron} />
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4" style={{
        backgroundColor: '#F6F8FC'
      }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Quality Isn’t a Choice But Built Into Everything We Do</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              {/* Horizontal line for top row */}
              <div className="absolute top-12 left-1/6 right-1/6 h-0.5 bg-muted-foreground/20"></div>
              {/* Vertical line down */}
              <div className="absolute top-12 right-1/6 w-0.5 h-32 bg-muted-foreground/20"></div>
              {/* Horizontal line for bottom row */}
              <div className="absolute top-44 left-1/6 right-1/6 h-0.5 bg-muted-foreground/20"></div>

              {/* Timeline nodes */}

              <div className="absolute top-11 left-1/2 w-2 h-2 bg-primary rounded-full -ml-1"></div>
              <div className="absolute top-11 right-1/6 w-2 h-2 bg-primary rounded-full -mr-1"></div>

              <div className="absolute top-43 left-1/2 w-2 h-2 bg-primary rounded-full -ml-1"></div>

            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-muted-foreground/20"></div>
            <div className="lg:hidden">
              {[...Array(6)].map((_, i) => <div key={i} className="absolute left-7 w-2 h-2 bg-primary rounded-full" style={{
                top: `${i * 160 + 48}px`
              }}></div>)}
            </div>

            {/* Process Cards Grid */}
            <div ref={processAnimation.ref} className={`grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 scroll-animate ${processAnimation.isVisible ? 'visible' : ''}`}>
              {/* Row 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm glow-hover card-hover relative lg:pl-8 delay-1">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Discovery </h3>
                <p className="text-muted-foreground text-sm">Understand the clients' businesses demands. Do a comprehensive research</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm glow-hover card-hover relative lg:pl-8 delay-2">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <PenTool className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Planning & Design</h3>
                <p className="text-muted-foreground text-sm">Create a detailed plan to outline project's milestones, timelines, deliverables and a Work Breakdown Structure </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm glow-hover card-hover relative lg:pl-8 delay-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Development </h3>
                <p className="text-muted-foreground text-sm">Utilize various programming languages and automation tools to build an AI-powered, responsive platform with optimized search, fast load times, and reduced manual work.</p>
              </div>

              {/* Row 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm glow-hover card-hover relative lg:pl-8 delay-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Testing </h3>
                <p className="text-muted-foreground text-sm">Testing the website the website's compatibility, security and performance to ensure that it meets the requirement standards and free from bug & errors </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm glow-hover card-hover relative lg:pl-8 delay-5">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Deploy & Deliver</h3>
                <p className="text-muted-foreground text-sm">Deploy the features or website to the client's server, ensuring stable performance and full accessibility.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm glow-hover card-hover relative lg:pl-8 delay-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Maintenance </h3>
                <p className="text-muted-foreground text-sm">Provide ongoing maintenance and support to monitor system health, resolve issues promptly, and implement necessary updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Expert Resources & Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free resources to help you understand and implement AI personalization
            </p>
          </div>

          <div ref={resourcesAnimation.ref} className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto scroll-animate ${resourcesAnimation.isVisible ? 'visible' : ''}`}>
            <Card className="glow-hover card-hover hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Downloadable E-book</CardTitle>
                <CardDescription>
                  Download free e-book on how to future-proof your site and turn trends into profit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setEbookDialogOpen(true)}
                >
                  Download Now
                </Button>
              </CardContent>
            </Card>

            <Card className="glow-hover card-hover hover:shadow-lg transition-all duration-300 delay-1">
              <CardHeader>
                <Library className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Knowledge Center</CardTitle>
                <CardDescription>
                  Read articles on customer stories, ecommerce trends, and best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open('https://bkplussoft.com/blog/', '_blank')}
                >
                  Click Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div ref={ctaAnimation.ref} className={`container mx-auto text-center scroll-animate ${ctaAnimation.isVisible ? 'visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your eCommerce Store?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free audit of your current platform and discover how AI personalization can boost your sales by 45% or more.
          </p>
          <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Book Your Free Platform Audit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </DialogTrigger>
          </Dialog>
          <p className="text-sm opacity-75 mt-4">
            No commitment required • 30-minute consultation • Instant insights
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-background border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex flex-col mb-4">
                <span className="text-xl font-bold leading-tight bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">BKPlus Software </span>
                <span className="text-sm text-muted-foreground leading-tight">
                </span>
              </div>
              <p className="text-muted-foreground">
                Transforming eCommerce with intelligent AI personalization solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Smart Search Engine</li>
                <li>AI-Powered Chatbot</li>
                <li>Product Recommendations</li>
                <li>Platform Audit</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Case Studies</li>
                <li>eBooks & Guides</li>
                <li>Webinars</li>
                <li>FAQ Center</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>hello@aicommerce.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Book a consultation</li>
                <li>Request demo</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AI Commerce. All rights reserved. • Privacy Policy • Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* Contact Dialog */}
      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-0 border-0">
          <div className="bg-background rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
              {/* Left Column */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      Contact Us
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We appreciate your interest in BKPlus Software Ecommerce Platform Audit.<br />
                      Send us your Ecommerce site, and we'll get back to you as soon as possible!
                    </p>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex gap-4 pt-6">
                    <a
                      href="https://www.facebook.com/bkplussoftware"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                    >
                      <Facebook className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href="https://vn.linkedin.com/company/bkplussoftware"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="p-8 lg:p-12">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);

                    const form = e.currentTarget;
                    const formData = new FormData(form);

                    // Add FormSubmit configuration
                    formData.append('_captcha', 'false');
                    formData.append('_next', window.location.origin);
                    formData.append('_subject', 'New Platform Audit Request from Website');

                    try {
                      const response = await fetch("https://formsubmit.co/giangnth@bkplussoft.com", {
                        method: "POST",
                        body: formData
                      });

                      if (response.ok) {
                        toast({
                          title: "Message sent successfully!",
                          description: "We'll get back to you as soon as possible.",
                        });
                        setContactDialogOpen(false);
                        form?.reset();
                      } else {
                        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                      }
                    } catch (error) {
                      console.error("Form submission error:", error);
                      toast({
                        title: "Failed to send message",
                        description: error instanceof Error ? error.message : "Please try again later.",
                        variant: "destructive",
                      });
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="h-12"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="h-12"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Business Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="h-12"
                      placeholder="Enter your business email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className="h-12"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-sm font-medium">
                      Website URL
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      className="h-12"
                      placeholder="https://your-website.com"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Contact Us"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* E-book Dialog */}
      <EbookDialog
        open={ebookDialogOpen}
        onOpenChange={setEbookDialogOpen}
      />
    </div>
  );
};
export default Index;