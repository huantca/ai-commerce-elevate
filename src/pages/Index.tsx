import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Search, MessageSquare, Target, BarChart3, Users, Zap, Star, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/lovable-uploads/f67962e3-3754-4f9f-a219-7895929b4f12.png" alt="BkPlus Logo" className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight">BkPlus</span>
              <span className="text-sm text-muted-foreground leading-tight">software</span>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
            <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">Resources</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            Book Free Audit
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">
            Trusted by 500+ eCommerce Stores
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
            Transform Your eCommerce with AI Personalization
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Boost your clothing and home & living store sales with our smart search engine, AI chatbot, and personalized product recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Free Platform Audit
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Stores Enhanced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">45%</div>
              <div className="text-sm text-muted-foreground">Avg. Sales Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete AI Personalization Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored for clothing and home & living eCommerce stores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Smart Search Engine */}
            <Card className="border-2 hover:border-primary/50 transition-colors">
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
            <Card className="border-2 hover:border-primary/50 transition-colors">
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
            <Card className="border-2 hover:border-primary/50 transition-colors">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results for eCommerce Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real transformations from clothing and home & living stores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Clothing Store</Badge>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <CardTitle>Fashion Forward Co.</CardTitle>
                <CardDescription>
                  Premium women's clothing retailer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">65%</div>
                      <div className="text-sm text-muted-foreground">Sales Increase</div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">40%</div>
                      <div className="text-sm text-muted-foreground">Search Accuracy</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "AI Commerce transformed our customer experience. Our search conversion rate doubled within 3 months."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Home & Living</Badge>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <CardTitle>Modern Living Hub</CardTitle>
                <CardDescription>
                  Contemporary furniture and decor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">52%</div>
                      <div className="text-sm text-muted-foreground">Revenue Growth</div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">35%</div>
                      <div className="text-sm text-muted-foreground">AOV Increase</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The personalized recommendations are incredibly accurate. Our customers love the shopping experience."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Multi-Brand</Badge>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <CardTitle>Style & Home Collective</CardTitle>
                <CardDescription>
                  Fashion and home goods marketplace
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">78%</div>
                      <div className="text-sm text-muted-foreground">Customer Retention</div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">45%</div>
                      <div className="text-sm text-muted-foreground">Support Efficiency</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The AI chatbot handles 80% of customer inquiries automatically while maintaining high satisfaction."
                  </p>
                </div>
              </CardContent>
            </Card>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>eCommerce AI Guide</CardTitle>
                <CardDescription>
                  Complete guide to implementing AI in your store
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Download eBook
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Personalization Webinar</CardTitle>
                <CardDescription>
                  Live session: Boosting sales with AI recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="w-8 h-8 text-primary mb-2" />
                <CardTitle>FAQ Center</CardTitle>
                <CardDescription>
                  Common questions about AI implementation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Browse FAQs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your eCommerce Store?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free audit of your current platform and discover how AI personalization can boost your sales by 45% or more.
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Book Your Free Platform Audit
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
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
              <div className="flex items-center space-x-3 mb-4">
                <img src="/lovable-uploads/f67962e3-3754-4f9f-a219-7895929b4f12.png" alt="BkPlus Logo" className="w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold leading-tight">BkPlus</span>
                  <span className="text-sm text-muted-foreground leading-tight">software</span>
                </div>
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
    </div>
  );
};

export default Index;
