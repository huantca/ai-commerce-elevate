import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle, Search, MessageSquare, Target, BarChart3, Users, Zap, Star, ArrowRight, PenTool, Code, Settings, Rocket, Shield } from "lucide-react";
import { useState } from "react";
const Index = () => {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const caseStudies = [{
    id: "ai-chatbot",
    title: "24/7 AI Chatbot",
    subtitle: "Smart Shopping Assistant",
    summary: "Always-on customer support that converts browsers into buyers with personalized assistance.",
    challenge: "Most of the online shopping occurs in the evening, when human support team are typically offline. Shoppers decide within 7-10 seconds whether should spend time and money on your site and when they don't feel it's responsive and supportive enough, they might return straight back to google search with other stores with the same offerings. Cart abandonment is popular with 30% of returns from buyer that feeling unsure at the checkout, the site misses out on the crucial moment of guidance. Let alone the different time zones, weekends or language gaps, the store is losing massive sales potential. For larger expensive goods ⇒ the customers need more assurance and need instantaneous support. The owners are interested in reducing the cost associated with having an employee that has to answer all the questions. But the worker has already worked from 9 to 5 Monday to friday, and the customer is on the website on saturday night at 9 P.M.",
    solutions: ["Answer questions instantly, from sizing and shipping to compatibility and use cases", "Guide decision-making, especially for shoppers who are overwhelmed or comparing similar products", "Increase AOV, using behavioral signal to surfaces add-ons, better-value bundles", "Recover exit-intent visitors, not with a generic pop-up but with personal suggestions tailored to what they've viewed or added to cart"],
    stats: [{
      value: "24/7",
      label: "Available"
    }, {
      value: "78%",
      label: "Cart Recovery"
    }]
  }, {
    id: "smart-search",
    title: "Smart Search Engine",
    subtitle: "Intelligent Product Discovery",
    summary: "Advanced search that understands customer intent and delivers relevant results instantly.",
    challenge: "Traditional search engines fail to understand customer intent, leading to poor results and frustrated shoppers. Customers often can't find what they're looking for, even when products exist in inventory. This results in lost sales and poor user experience.",
    solutions: ["Synonym recognition and natural language processing", "Autocomplete suggestions based on popular searches", "Typo correction and fuzzy matching", "Visual search capabilities for fashion and home items"],
    stats: [{
      value: "65%",
      label: "Search Accuracy"
    }, {
      value: "40%",
      label: "Conversion Rate"
    }]
  }, {
    id: "personalization",
    title: "AI Personalization",
    subtitle: "Tailored Shopping Experience",
    summary: "Dynamic product recommendations that adapt to each customer's preferences and behavior.",
    challenge: "Generic product recommendations don't resonate with individual customers. One-size-fits-all approaches fail to capture personal preferences, shopping patterns, and context, resulting in low engagement and missed cross-selling opportunities.",
    solutions: ["Real-time behavior analysis and preference learning", "Dynamic product recommendations based on browsing history", "Personalized email campaigns with relevant products", "Contextual upselling and cross-selling suggestions"],
    stats: [{
      value: "52%",
      label: "Revenue Growth"
    }, {
      value: "35%",
      label: "AOV Increase"
    }]
  }];
  return <div className="min-h-screen bg-background">
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
          <Button className="bg-primary hover:bg-primary/90">
            Book Free Audit
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6">Trusted by 20+ eCommerce Leaders & CX Managers</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">Boost Your eCommerce with AI Personalization</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Grow your business 24/7 with AI. Our AI Sales Assistants works while you sleep, boosts conversions with Smart Search, and drives upsells with Smart Recommendations

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Case, Real Work </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Don't just take our word. Here are what our customers say about us!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => <Card key={study.id} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
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
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{study.title}</DialogTitle>
                        <DialogDescription>{study.subtitle}</DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-3">The Challenge</h3>
                          <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-3">Our Solutions</h3>
                          <ul className="space-y-2">
                            {study.solutions.map((solution, index) => <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{solution}</span>
                              </li>)}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-3">Results</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {study.stats.map((stat, index) => <div key={index} className="text-center p-4 bg-muted rounded-lg">
                                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                              </div>)}
                          </div>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A clear process — from ideation and design to deployment and support — ensures every product meets the highest standards.
            </p>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Row 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm animate-fade-in relative lg:pl-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Nghiên cứu</h3>
                <p className="text-muted-foreground text-sm">Xác định tính năng cốt lõi, nhu cầu người dùng và yêu cầu kỹ thuật.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm animate-fade-in relative lg:pl-8" style={{
              animationDelay: '0.1s'
            }}>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <PenTool className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Thiết kế</h3>
                <p className="text-muted-foreground text-sm">Chọn công nghệ/khung, tạo wireframe, prototype và UI.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm animate-fade-in relative lg:pl-8" style={{
              animationDelay: '0.2s'
            }}>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phát triển</h3>
                <p className="text-muted-foreground text-sm">Áp dụng test‑driven/CI để đảm bảo chất lượng và tiến độ.</p>
              </div>

              {/* Row 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm animate-fade-in relative lg:pl-8" style={{
              animationDelay: '0.3s'
            }}>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Kiểm thử</h3>
                <p className="text-muted-foreground text-sm">Kiểm thử nghiêm ngặt để phát hiện và sửa mọi lỗi.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm animate-fade-in relative lg:pl-8" style={{
              animationDelay: '0.4s'
            }}>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Triển khai</h3>
                <p className="text-muted-foreground text-sm">Đưa sản phẩm lên môi trường thực tế/store và cấu hình vận hành.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm animate-fade-in relative lg:pl-8" style={{
              animationDelay: '0.5s'
            }}>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Bảo hành & Bảo trì</h3>
                <p className="text-muted-foreground text-sm">Giám sát hiệu năng, cập nhật, xử lý sự cố nhanh chóng.</p>
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
    </div>;
};
export default Index;