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
const Index = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [ebookDialogOpen, setEbookDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
            <div className="flex flex-col px-3 py-1 rounded-lg bg-gradient-to-r from-brand-teal/10 to-brand-blue/10 backdrop-blur-sm">
              <span className="text-xl font-bold leading-tight bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">BKPLUS</span>
              <span className="text-muted-foreground leading-tight text-sm font-medium">SOFTWARE</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
            <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Process</a>
            <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">Resources</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>
          <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                Book Free Audit
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div ref={heroAnimation.ref} className={`container mx-auto text-center max-w-4xl scroll-animate ${heroAnimation.isVisible ? 'visible' : ''}`}>
          <Badge variant="secondary" className="mb-6">Trusted by 20+ eCommerce Leaders & CX Managers</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">Boost Your eCommerce with AI Personalization</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Grow your business 24/7 with AI. Our AI Sales Assistants works while you sleep, boosts conversions with Smart Search, and drives upsells with Smart Recommendations

        </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Free Platform Audit
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </DialogTrigger>
            </Dialog>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">40.3%</div>
              <div className="text-sm text-muted-foreground">Increase in order value </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">45%</div>
              <div className="text-sm text-muted-foreground">Avg. Sales Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10.2x</div>
              <div className="text-sm text-muted-foreground">More likely to convert </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete AI Personalization Solutions </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Maximize Every Visit: AI That Knows Your Customers' Shopping Habit Better Than You Do</p>
          </div>

          <div ref={servicesAnimation.ref} className={`grid grid-cols-1 md:grid-cols-3 gap-8 scroll-animate ${servicesAnimation.isVisible ? 'visible' : ''}`}>
            {/* Smart Search Engine */}
            <Card className="glow-hover card-hover border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Search Engine</CardTitle>
                <CardDescription>
                  Intelligent search that understands your customers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Synonym recognition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Autocomplete & suggestions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Typo correction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AI-Powered Chatbot */}
            <Card className="glow-hover card-hover border-2 hover:border-primary/50 transition-all duration-300 delay-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Chatbot</CardTitle>
                <CardDescription>
                  24/7 customer support and product discovery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Product discovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Personalized recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Customer support & order tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Smart Recommendations */}
            <Card className="glow-hover card-hover border-2 hover:border-primary/50 transition-all duration-300 delay-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Recommendations</CardTitle>
                <CardDescription>
                  Personalized product suggestions that convert
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Similar items & 1:1 personalization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Recently viewed items</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Frequently bought together</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Case, Real Work </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Don't just take our word. Here are what our customers say about us!</p>
          </div>

          <div ref={caseStudiesAnimation.ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate ${caseStudiesAnimation.isVisible ? 'visible' : ''}`}>
            {caseStudiesData.map((study, index) => <Card key={study.id} className={`glow-hover card-hover hover:shadow-lg transition-all duration-300 delay-${Math.min(index + 1, 6)}`}>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">{study.subtitle}</Badge>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {study.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {study.stats.map((stat, index) => <div key={index} className="text-center p-3 bg-muted rounded-lg">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>)}
                  </div>
                  
                  <Dialog open={openDialog === study.id} onOpenChange={open => setOpenDialog(open ? study.id : null)}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-0 border-0">
                      <div className="bg-gradient-to-br from-background via-background to-background/95 rounded-2xl overflow-hidden">
                        <DialogHeader className="px-8 pt-8 pb-6 border-b border-border/50">
                          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            {study.title}
                          </DialogTitle>
                          <DialogDescription className="text-lg text-muted-foreground mt-2">
                            {study.subtitle}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="px-8 py-8">
                          {study.id === "ai-chatbot" && <div className="space-y-10">
                              {/* The Client */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                    <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">The Client</h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed pl-13">
                                  A Parisian clothing store integrates our 24/7 AI Chatbot to drive revenue and reduce customer support workload, resulting in over <span className="font-bold text-primary">€14,694</span> in sales.
                                </p>
                                <Separator className="mt-6 opacity-30" />
                              </div>
                              
                              {/* The Challenge */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
                                </div>
                                <ul className="space-y-4 pl-13">
                                  <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-lg text-muted-foreground leading-relaxed">
                                      <span className="font-semibold text-primary">50–55%</span> of online shopping occurs when support teams are offline—causing delays, confusion, or cart abandonment.
                                    </span>
                                  </li>
                                  <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-lg text-muted-foreground leading-relaxed">
                                      Employees wasted time answering repetitive customer queries.
                                    </span>
                                  </li>
                                  <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-lg text-muted-foreground leading-relaxed">
                                      Shoppers had difficulty finding the right products quickly.
                                    </span>
                                  </li>
                                </ul>
                                <Separator className="mt-8 opacity-30" />
                              </div>
                              
                              {/* Our Solutions */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                    <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">Our Solutions</h3>
                                </div>
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-xl p-6 ml-13">
                                  <p className="text-lg text-muted-foreground leading-relaxed">
                                    Recognizing the sales loss due to time zone differences, weekends, and language barriers, the client adopted our AI chatbot. The chatbot was embedded into their website to provide instant support around the clock.
                                  </p>
                                </div>
                                <Separator className="mt-8 opacity-30" />
                              </div>
                              
                              {/* The Results */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">The Results</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-13">
                                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                                    <div className="text-3xl font-bold text-primary mb-2">30+</div>
                                    <div className="text-muted-foreground">hours of support time saved by automating routine inquiries</div>
                                  </div>
                                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                                    <div className="text-3xl font-bold text-primary mb-2">80%</div>
                                    <div className="text-muted-foreground">of questions like "Where's my order?" were resolved without human agents</div>
                                  </div>
                                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                                    <div className="text-3xl font-bold text-primary mb-2">20%</div>
                                    <div className="text-muted-foreground">of queries were smoothly escalated to human support when needed</div>
                                  </div>
                                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                                    <div className="text-3xl font-bold text-primary mb-2">486+</div>
                                    <div className="text-muted-foreground">customer chats handled in 90 days, cutting manual workload and boosting response speed</div>
                                  </div>
                                </div>
                                <Separator className="mt-8 opacity-30" />
                              </div>
                              
                              {/* Tech Stack */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900/30 rounded-lg flex items-center justify-center">
                                    <Code2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">Tech Stack</h3>
                                </div>
                                <div className="flex flex-wrap gap-3 pl-13">
                                  {["Python", "Node.js", "Angular"].map(tech => <Badge key={tech} variant="secondary" className="px-4 py-2 text-base font-medium">
                                      {tech}
                                    </Badge>)}
                                </div>
                              </div>
                            </div>}
                          
                          {study.id === "smart-search" && <div className="space-y-10">
                              {/* The Client */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                    <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">The Client</h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed pl-13">
                                  A German wall art stores integrates smart search and recommendation features into their ecommerce platform, which helps them make <span className="font-bold text-primary">15,000 euros</span> in the last 90 days with an increase of <span className="font-bold text-primary">0.8 products/basket</span>
                                </p>
                                <Separator className="mt-6 opacity-30" />
                              </div>
                              
                              {/* The Challenge */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
                                </div>
                                <ul className="space-y-4 pl-13">
                                  <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-lg text-muted-foreground leading-relaxed">
                                      Struggling to show customers the right related products to boost cross-selling opportunities
                                    </span>
                                  </li>
                                  <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-lg text-muted-foreground leading-relaxed">
                                      Needed to improve the overall user experience in their webshop with a more intuitive search to help drive sales
                                    </span>
                                  </li>
                                  <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-lg text-muted-foreground leading-relaxed">
                                      Wanted to increase upselling with more relevant product suggestions instead of low-margin items
                                    </span>
                                  </li>
                                </ul>
                                <Separator className="mt-8 opacity-30" />
                              </div>
                              
                              {/* Our Solutions */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                    <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">Our Solutions</h3>
                                </div>
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-xl p-6 ml-13">
                                  <p className="text-lg text-muted-foreground leading-relaxed">
                                    Realizing the challenge and the need to have an advanced functionality that can surpass the standard search bar of their webshop. With smart search engine, they have been able to display precisely what the customer wants and have removed any manual work associated.
                                  </p>
                                </div>
                                <Separator className="mt-8 opacity-30" />
                              </div>
                              
                              {/* The Results */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">The Results</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-13">
                                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                                    <div className="text-3xl font-bold text-primary mb-2">12.5%</div>
                                    <div className="text-muted-foreground">increase in revenue</div>
                                  </div>
                                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                                    <div className="text-3xl font-bold text-primary mb-2">23%</div>
                                    <div className="text-muted-foreground">increase in basket size</div>
                                  </div>
                                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                                    <div className="text-3xl font-bold text-primary mb-2">14%</div>
                                    <div className="text-muted-foreground">higher average order value</div>
                                  </div>
                                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                                    <div className="text-3xl font-bold text-primary mb-2">100+</div>
                                    <div className="text-muted-foreground">most commonly spelled variations handled</div>
                                  </div>
                                </div>
                                <Separator className="mt-8 opacity-30" />
                              </div>
                              
                              {/* Tech Stack */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900/30 rounded-lg flex items-center justify-center">
                                    <Code2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">Tech Stack</h3>
                                </div>
                                <div className="flex flex-wrap gap-3 pl-13">
                                  {["Python", "Java", "Tailwind CSS"].map(tech => <Badge key={tech} variant="secondary" className="px-4 py-2 text-base font-medium">
                                      {tech}
                                    </Badge>)}
                                </div>
                              </div>
                            </div>}
                          
                          {study.id === "personalization" && <div className="space-y-10">
                              {/* The Client */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                    <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">The Client</h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed pl-13">
                                  A German vaping web shops integrates smart search and recommendation features into their ecommerce platform, which helped them manage their large inventory through continuous and autonomous product recommendation
                                </p>
                                <Separator className="mt-6 opacity-30" />
                              </div>
                              
                              {/* The Challenge */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                                    <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
                                </div>
                                <ul className="space-y-4 pl-13">
                                  <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-lg text-muted-foreground leading-relaxed">
                                      Faced time-consuming, manual management of product listings and recommendations
                                    </span>
                                  </li>
                                  <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-lg text-muted-foreground leading-relaxed">
                                      Their large inventory made it difficult to deliver personalized shopping experiences
                                    </span>
                                  </li>
                                  <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-lg text-muted-foreground leading-relaxed">
                                      Data from manual recommendations quickly became outdated
                                    </span>
                                  </li>
                                  <li className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-lg text-muted-foreground leading-relaxed">
                                      Inefficient manually adding recommended product for each new item
                                    </span>
                                  </li>
                                </ul>
                                <Separator className="mt-8 opacity-30" />
                              </div>
                              
                              {/* Our Solutions */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                                    <Lightbulb className="w-5 h-5 text-green-600 dark:text-green-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">Our Solutions</h3>
                                </div>
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/10 dark:to-blue-900/10 rounded-xl p-6 ml-13">
                                  <p className="text-lg text-muted-foreground leading-relaxed">
                                    Want to say goodbye to manual work and freeing up their time to focus on the more important aspects like business strategy and product development, they decided to integrate automated recommendation engine into their platform
                                  </p>
                                </div>
                                <Separator className="mt-8 opacity-30" />
                              </div>
                              
                              {/* The Results */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">The Results</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-13">
                                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                                    <div className="text-3xl font-bold text-primary mb-2">108%</div>
                                    <div className="text-muted-foreground">Increase in Conversion Rate</div>
                                  </div>
                                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                                    <div className="text-3xl font-bold text-primary mb-2">25%</div>
                                    <div className="text-muted-foreground">Higher Average Order Value which allows customer to explore additional products</div>
                                  </div>
                                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                                    <div className="text-3xl font-bold text-primary mb-2">39%</div>
                                    <div className="text-muted-foreground">Increase in Basket Size</div>
                                  </div>
                                </div>
                                <Separator className="mt-8 opacity-30" />
                              </div>
                              
                              {/* Tech Stack */}
                              <div className="group">
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900/30 rounded-lg flex items-center justify-center">
                                    <Code2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-foreground">Tech Stack</h3>
                                </div>
                                <div className="flex flex-wrap gap-3 pl-13">
                                  {["Python", "Java", "Tailwind CSS"].map(tech => <Badge key={tech} variant="secondary" className="px-4 py-2 text-base font-medium">
                                      {tech}
                                    </Badge>)}
                                </div>
                              </div>
                            </div>}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>)}
          </div>
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