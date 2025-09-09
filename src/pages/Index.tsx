import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Search, MessageSquare, Target, BarChart3, Users, Zap, Star, ArrowRight, PenTool, Code, Settings, Rocket, Shield, Building2, AlertTriangle, Lightbulb, TrendingUp, Code2, Facebook, Linkedin, BookOpen, Library } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { caseStudiesData } from "@/components/CaseStudiesData";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EbookDialog } from "@/components/EbookDialog";
import { useToast } from "@/hooks/use-toast";
import { ProjectDetails } from "@/components/ProjectDetails";
import ProjectDetailsAttronAI from "@/components/ProjectDetailsAttronAI";
import ProjectDetailsGPGAMALL from "@/components/ProjectDetailsGPGAMALL";
import CalendlyWidget from '@/components/CalendlyWidget';

const Index = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [ebookDialogOpen, setEbookDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [showProjectDetailsAttron, setShowProjectDetailsAttron] = useState(false);
  const [showProjectDetailsGpgamall, setShowProjectDetailsGpgamall] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const { toast } = useToast();
  
  // Video autoplay on scroll
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const isVideoVisible = useIntersectionObserver(videoContainerRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  });

  useEffect(() => {
    if (!videoRef.current) return;

    const playVideo = async () => {
      try {
        if (isVideoVisible) {
          videoRef.current.volume = 1; // Set volume to max
          videoRef.current.muted = false; // Ensure not muted
          await videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      } catch (error) {
        console.log('Autoplay with sound failed:', error);
      }
    };

    playVideo();
  }, [isVideoVisible]);

  const testimonials = [
    {
      name: 'Daniel Finn',
      product: 'Fondateur, Now Health International',
      des: 'Leurs produits logiciels sont de haute qualité, fiables et largement utilisés et respectés dans le secteur.',
    },
    {
      name: 'Kim Jack',
      product: 'Fondateur, Carnival Supply Co., Ltd',
      des: 'Ils étaient fiables et dévoués. Quelle excellente expérience !',
    },
    {
      name: 'Joel',
      product: 'Fondateur, Attorn AI',
      des: 'Leur capacité à transformer une idée vague en un MVP utilisable et bien conçu était impressionnante.',
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
            <a href="#case-studies1" className="text-muted-foreground hover:text-primary hover:font-medium transition-colors">Études de cas</a>
            <a href="#section_review" className="text-muted-foreground hover:text-primary hover:font-medium transition-colors">Avis client</a>
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
      <section id="welcome" className="relative py-20 px-4 bg-cover bg-center min-h-[80vh] flex items-center" style={{ backgroundImage: 'url(/lovable-uploads/bg_hero_section.png)' }}>
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
      <section id="case-studies1" className="py-20 px-4 bg-white">
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

      {/* Case Studies Section2 - ATTORN AI */}
      <section id="case-studies2" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center text-primary text-sm font-medium whitespace-pre">
                EdTech  |    B2B2C
              </div>
              <div className="flex items-center gap-4">
                {/* <img 
                  src="/lovable-uploads/img_laptop_attorn_ai.png" 
                  alt="AttornAI Logo" 
                  className="h-12 w-auto self-center"
                /> */}
                <h2 className="text-5xl md:text-6xl font-bold text-primary">ATTORN AI</h2>
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
                  src="/lovable-uploads/img_laptop_attorn_ai.png"
                  alt="AttornAI Platform"
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

      {/* Case Studies Section3 - GPGAMALL */}
      <section id="case-studies3" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center text-primary text-sm font-medium whitespace-pre">
                ECommerce  |   Marketplace  |  B2B2C
              </div>
              <div className="flex items-center gap-4">
                <div className="relative h-16 md:h-20 w-auto">
                  <img
                    src="/lovable-uploads/ic_logo_gpgamall.png"
                    srcSet="/lovable-uploads/ic_logo_gpgamall.png 1x, /lovable-uploads/ic_logo_gpgamall.png 2x"
                    alt="GPGA Mall Logo"
                    className="h-full w-auto object-contain"
                    style={{
                      imageRendering: 'crisp-edges',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                    loading="eager"
                    width="auto"
                    height="100%"
                  />
                </div>
              </div>
              <p className="text-base text-primary/90" style={{ color: '#052C65' }}>
                <strong>Une plateforme e-commerce destinée aux consommateurs finaux et aux petites entreprises du secteur de la beauté et des cosmétiques.</strong> Elle propose une vitrine conviviale et un tableau de bord administrateur personnalisé, développé sur la base de la plateforme Saleor, conçu pour simplifier à la fois l’expérience client et les opérations back-end.</p>
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => setShowProjectDetailsGpgamall(!showProjectDetailsGpgamall)}
              >
                Voir le projet
                <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${showProjectDetailsGpgamall ? 'rotate-90' : ''}`} />
              </Button>
            </div>

            {/* Right Column - Image */}
            <div className="md:w-1/2 relative">
              <div className="relative overflow-visible">
                <img
                  src="/lovable-uploads/img_laptop_gpgamall_ai.png"
                  alt="GPGAMALL Platform"
                  className="ml-auto max-w-full h-auto object-cover object-left"
                  style={{ maxWidth: '120%', marginRight: '-13%' }}
                />
              </div>
            </div>
          </div>
          {/* Project Details gpgmall */}
          <ProjectDetailsGPGAMALL isOpen={showProjectDetailsGpgamall} />
        </div>
      </section>

      {/* Review Section */}
      <section id="section_review" className="py-12 md:py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Column - Video */}
            <div className="w-full lg:w-1/2">
              <div 
                ref={videoContainerRef}
                className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg" 
                style={{ minHeight: '300px', height: '50vh', maxHeight: '600px' }}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  controls
                  playsInline
                  loop
                  muted={false}
                  autoPlay
                  poster="/lovable-uploads/video-poster.jpg"
                >
                  <source src="/lovable-uploads/bkplus_service_review.mp4" type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="w-full md:w-1/2 space-y-3 text-blue800">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Choix de BKPlus après une comparaison attentive</h3>
                <p>
                  Plusieurs propositions ont été examinées au départ, mais BKPlus s'est démarqué dès le premier entretien avec les fondateurs, Frankie et Daniel.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Gestion d'un projet d'IA très complexe:</h3>
                <p>
                  Création d'une plateforme d'IA générative entièrement développée à partir de zéro, sur plus de 18 mois de collaboration continue.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Respect total de la vision:</h3>
                <p>
                  Conception du flux de travail exactement comme prévu, construit étape par étape tout en gardant une vue d'ensemble.</p>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Dévouement et professionnalisme exceptionnels:</h3>
                <p className="flex items-start">
                  <span className="mr-2">•</span> Capacité d'adaptation même lorsque les besoins n'étaient pas totalement clairs.
                </p>
                <p className="flex items-start">
                  <span className="mr-2">•</span> Travail en dehors des horaires habituels pour garantir la réussite du projet.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Le Vietnam, un pôle technologique en plein essor:</h3>
                <p>
                  Un vivier de talents qualifiés, motivés et compétitifs confirme le rôle croissant du Vietnam dans le paysage technologique asiatique.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Des solutions flexibles pour chaque client:</h3>
                <p>
                  Du prototype à grande échelle aux landing pages, sites e-commerce ou services de support continu.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Recommandation forte:</h3>
                <p>
                  Engagez BKPlus dès que possible, leur réputation croît rapidement et la demande ne cesse d'augmenter.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Un partenaire de confiance à travers l'Asie:</h3>
                <p>
                  Fiable non seulement au Vietnam, mais aussi par rapport aux concurrents de la région.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service & Reviews Section */}
      <section id="section_customer_service" className="py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Customer Service */}
              <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col items-center text-center lg:text-left lg:items-start">
                <div className="mb-6 w-full flex justify-center lg:justify-start">
                  <img
                    src="/lovable-uploads/img_customer_service.png"
                    alt="Customer Service"
                    className="h-auto"
                    style={{ maxWidth: '140px', maxHeight: '82px' }}
                  />
                </div>
                <p className="text-gray-700">
                  Avec une approche centrée sur le client et une priorité donnée à la qualité plutôt qu’à la quantité, nous avons collaboré avec des leaders visionnaires pour transformer leurs idées en applications web et mobiles à fort impact. Notre bilan : plus de 10 millions de téléchargements et plus de 20 applications mises en avant sur Google Play et l’App Store, offrant des produits qui génèrent une réelle valeur pour l’entreprise.
                </p>
              </div>

              {/* Right Side - Verified Reviews */}
              <div className="p-8 lg:p-12 lg:w-1/2 bg-gray-50 flex flex-col justify-center">
                <div className="space-y-4 max-w-md mx-auto w-full">
                  {[
                    '15+ avis clients vérifiés',
                    'Note de 4,9/5 sur Clutch & GoodFirms',
                    '20+ applications mobiles lancées sur Google Play & App Store',
                    'Plus de 10M de téléchargements d’applications clients',
                    'Plus de 500K € levés par nos clients'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src="/lovable-uploads/ic_tick_circle.svg"
                        alt="Tick"
                        className="w-6 h-6 mr-3"
                      />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="section_cta" className="py-16 md:py-24 text-primary-foreground" style={{ backgroundColor: '#052C65' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Column - Text Content */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contactez notre chef de projet
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Appel découverte – 30 minutes</h3>
                  <p className="text-primary-foreground/90">
                    Des Plusieurs propositions ont été examinées au départ, mais BKPlus s'est démarqué dès le premier entretien avec les fondateurs, Frankie et Daniel.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Comment tirer le meilleur parti de votre appel</h3>
                  <p className="text-primary-foreground/90">
                    Pour rendre notre échange le plus productif possible, préparez vos questions et objectifs à l'avance. Notre chef de projet prendra le temps de comprendre vos besoins spécifiques.
                  </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="relative">
                    {/* Fixed height container to prevent layout shift */}
                    <div className="min-h-[180px] flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={prevTestimonial}
                            className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                            aria-label="Témoignage précédent"
                          >
                            <img src="/lovable-uploads/ic_arrow_left.svg" alt="Précédent" className="w-6 h-6" />
                          </button>
                          <span className="text-sm font-medium w-5 text-center">
                            {currentTestimonial + 1}/{testimonials.length}
                          </span>
                          <button
                            onClick={nextTestimonial}
                            className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                            aria-label="Témoignage suivant"
                          >
                            <img src="/lovable-uploads/ic_arrow_right.svg" alt="Suivant" className="w-6 h-6" />
                          </button>
                        </div>
                      </div>
                      <div className="pt-2 flex-grow flex flex-col">
                        <p className="text-primary-foreground/90">
                          {testimonials[currentTestimonial].product}
                        </p>
                        <p className="text-primary-foreground/90 mt-2 flex-grow">
                          {testimonials[currentTestimonial].des}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Calendly Widget */}
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100" style={{ aspectRatio: '1/1.2' }}>
                <CalendlyWidget />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-background border-t px-4">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-blue800">
            <span>Discutons de votre projet!</span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +33 6 50 83 70 77
            </span>
            <span>ou</span>
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              contact@bkplussoft.com
            </span>
            <span>— du lundi au vendredi</span>
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
                      Discutons de votre projet

                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Nous vous remercions de l’intérêt que vous portez à BKPlus Software Consulting.
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
                    formData.append('_template', 'table');
                    formData.append('_next', `${window.location.origin}?form_submitted=true`);
                    formData.append('_subject', 'Nouvelle demande de contact - Site Web');
                    formData.append('_autoresponse', 'Merci pour votre message. Nous vous recontacterons rapidement.');

                    try {
                      const response = await fetch("https://formsubmit.co/giangnth@bkplussoft.com", {
                        method: "POST",
                        body: formData
                      });

                      if (response.ok) {
                        toast({
                          title: "Message envoyé avec succès !",
                          description: "Nous vous recontacterons dès que possible.",
                        });
                        setContactDialogOpen(false);
                        form?.reset();
                      } else {
                        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                      }
                    } catch (error) {
                      console.error("Form submission error:", error);
                      toast({
                        title: "Échec de l'envoi du message",
                        description: error instanceof Error ? error.message : "Veuillez réessayer plus tard.",
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
                      <Label htmlFor="name_or_company" className="text-sm font-medium">
                        Nom ou société*
                      </Label>
                      <Input
                        id="name_or_company"
                        name="name_or_company"
                        type="text"
                        required
                        className="h-12"
                        placeholder="Jean Martin"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email_contact" className="text-sm font-medium">
                      Adresse e-mail de contact*
                      </Label>
                      <Input
                        id="email_contact"
                        name="email_contact"
                        type="email"
                        required
                        className="h-12"
                        placeholder="jean.martin@exemple.fr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telephone" className="text-sm font-medium">
                      Numéro de téléphone*
                      </Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        required
                        className="h-12"
                        placeholder=" +3364527xxxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-sm font-medium">
                      Budget*
                      </Label>
                      <Input
                        id="budget"
                        name="budget"
                        type="number"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business_email" className="text-sm font-medium">
                      Entreprise
                    </Label>
                    <Input
                      id="business_email"
                      name="business_email"
                      type="text"
                      className="h-12"
                      placeholder="Agence Martin & Co."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[60px]"
                      placeholder="Bonjour, je suis intéressé(e) par vos services. Merci de me recontacter rapidement afin que nous puissions échanger à ce sujet. Bien cordialement."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg disabled:opacity-50"
                  >
                    {isSubmitting ? "Envoi..." : "Contactez-nous"}
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