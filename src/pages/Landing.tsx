import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Heart, 
  Sparkles, 
  Shield, 
  Users, 
  Video, 
  Phone,
  BookOpen,
  Briefcase,
  DollarSign,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Brain,
  Zap,
  Globe,
  Lock,
  Play
} from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Video,
    title: 'Video Sessions',
    description: 'Face-to-face conversations with AI counselors using advanced avatar technology.',
  },
  {
    icon: Phone,
    title: 'Voice Calls',
    description: 'Prefer talking? Get a callback from our AI counselor at your convenience.',
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'Your conversations are encrypted and completely confidential.',
  },
  {
    icon: Clock,
    title: '24/7 Available',
    description: 'Get support whenever you need it, day or night, no appointments needed.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Advanced AI understands your emotions and provides personalized guidance.',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Communicate in your preferred language for better understanding.',
  },
];

const counselingAreas = [
  { icon: Heart, title: 'Health & Wellness', color: 'bg-primary/10 text-primary', desc: 'Mental health, stress, anxiety support' },
  { icon: Briefcase, title: 'Career Guidance', color: 'bg-calm/10 text-calm', desc: 'Job search, interview prep, career planning' },
  { icon: BookOpen, title: 'Academic Support', color: 'bg-wellness/10 text-wellness', desc: 'Study tips, time management, exam prep' },
  { icon: DollarSign, title: 'Financial Advice', color: 'bg-calm/10 text-calm', desc: 'Budgeting, loans, financial planning' },
  { icon: Users, title: 'Relationships', color: 'bg-primary/10 text-primary', desc: 'Communication, conflict resolution' },
  { icon: Star, title: 'Personal Growth', color: 'bg-wellness/10 text-wellness', desc: 'Goal setting, habits, self-improvement' },
];

const testimonials = [
  {
    quote: "MindfulU helped me manage my exam stress. The AI counselor was surprisingly understanding and helpful. I felt like I was talking to a real person!",
    author: "Sarah M.",
    role: "Computer Science Student",
    rating: 5,
  },
  {
    quote: "I was skeptical at first, but the career guidance session really helped me prepare for interviews. Got my dream job!",
    author: "James L.",
    role: "Business Major",
    rating: 5,
  },
  {
    quote: "Having 24/7 access to support has been a game-changer for my mental health journey. No more waiting for appointments.",
    author: "Emily R.",
    role: "Psychology Student",
    rating: 5,
  },
  {
    quote: "The AI understands context so well. It remembered our previous conversations and built on them.",
    author: "Michael T.",
    role: "Engineering Student",
    rating: 5,
  },
];

const benefits = [
  { icon: Lock, title: 'No Judgment', desc: 'Express yourself freely without fear' },
  { icon: Zap, title: 'Instant Access', desc: 'No waiting, start immediately' },
  { icon: CheckCircle, title: 'Evidence-Based', desc: 'Proven counseling techniques' },
  { icon: Heart, title: 'Empathetic AI', desc: 'Understanding & compassionate' },
];

export default function Landing() {
  const [showAvatarPreview, setShowAvatarPreview] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-semibold text-foreground">MindfulU</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#avatar-demo" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              AI Avatar Demo
            </a>
            <a href="#areas" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Counseling Areas
            </a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Testimonials
            </a>
          </nav>

          <Button variant="hero" size="sm" asChild>
            <Link to="/login">
              Login
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse-soft" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-wellness/5 blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container relative py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-fade-in">
              <Sparkles className="h-4 w-4" />
              AI-Powered Mental Health Support for Students
            </div>
            
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl animate-slide-up">
              Your Personal AI Counselor,{' '}
              <span className="bg-gradient-to-r from-primary via-wellness to-calm bg-clip-text text-transparent">
                Available 24/7
              </span>
            </h1>
            
            <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Get confidential mental health support, career guidance, and academic advice 
              through video or voice calls with our understanding AI counselors. 
              <strong className="text-foreground"> No appointments, no waiting, no judgment.</strong>
            </p>
            
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl" asChild className="shadow-glow">
                <Link to="/login">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#avatar-demo">
                  <Play className="h-5 w-5 mr-2" />
                  See AI Avatar Demo
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>End-to-End Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-wellness" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-calm" />
                <span>Evidence-Based Approach</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {[
              { value: '50K+', label: 'Students Helped' },
              { value: '24/7', label: 'Availability' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '100%', label: 'Confidential' },
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="font-heading text-3xl font-bold text-primary md:text-5xl transition-transform group-hover:scale-110">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 border-b border-border/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 transition-all hover:bg-muted animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{benefit.title}</p>
                  <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Avatar Demo Section - HIGHLIGHTED */}
      <section id="avatar-demo" className="py-20 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-wellness/10 px-4 py-2 text-sm font-medium text-wellness">
              <Sparkles className="h-4 w-4" />
              Powered by Beyond Presence AI
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl mb-4">
              Meet Your AI Counselor
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience our lifelike AI avatar technology. Our counselors use advanced Beyond Presence 
              technology to create natural, empathetic conversations that feel truly human.
            </p>
          </div>

          {/* Avatar Preview */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border-4 border-primary/20 shadow-elevated bg-card">
              {showAvatarPreview ? (
                <iframe 
                  src="https://bey.chat/55590705-9528-4022-9550-70b724c962d8"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  allowFullScreen
                  allow="camera; microphone; fullscreen"
                  style={{ border: 'none' }}
                  title="AI Counselor Avatar Demo"
                />
              ) : (
                <div 
                  className="relative h-[500px] flex items-center justify-center bg-gradient-to-br from-primary/10 to-wellness/10 cursor-pointer group"
                  onClick={() => setShowAvatarPreview(true)}
                >
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800')] bg-cover bg-center opacity-20" />
                  <div className="relative z-10 text-center">
                    <div className="mb-6 mx-auto w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                      <Play className="h-12 w-12 text-primary ml-1" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      Try Our AI Avatar Demo
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Click to interact with our AI counselor avatar. Experience how natural and 
                      understanding our technology can be.
                    </p>
                    <Button variant="hero" size="lg" className="mt-6" onClick={() => setShowAvatarPreview(true)}>
                      Start Demo
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
                <Video className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Real-time video interaction</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
                <Brain className="h-4 w-4 text-wellness" />
                <span className="text-muted-foreground">Emotion-aware responses</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50">
                <MessageCircle className="h-4 w-4 text-calm" />
                <span className="text-muted-foreground">Natural conversation</span>
              </div>
            </div>
          </div>

          {/* Beyond Presence attribution */}
          <div className="mt-8 text-center">
            <a 
              href="https://www.beyondpresence.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span>Powered by</span>
              <span className="font-semibold text-foreground">Beyond Presence AI</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl mb-4">
              Why Choose MindfulU?
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine cutting-edge AI technology with proven counseling techniques 
              to provide accessible mental health support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group border-border/50 bg-card shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Counseling Areas */}
      <section id="areas" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl mb-4">
              Expert Guidance in Every Area
            </h2>
            <p className="text-lg text-muted-foreground">
              From mental wellness to career planning, our AI counselors are trained 
              to support you across all aspects of student life.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {counselingAreas.map((area, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:shadow-card hover:border-primary/30 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${area.color} transition-transform duration-300 group-hover:scale-110`}>
                  <area.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.desc}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Getting support is simple. Start your journey in three easy steps.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Sign Up & Tell Us About You',
                description: 'Create your free account and complete a quick, friendly questionnaire so we can personalize your experience.',
                icon: Users,
              },
              {
                step: '2',
                title: 'Choose Your Topic',
                description: 'Select the area you need support in from our six counseling categories.',
                icon: MessageCircle,
              },
              {
                step: '3',
                title: 'Start Your Session',
                description: 'Connect via video or voice call and start your counseling session with our AI avatar.',
                icon: Video,
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full gradient-primary shadow-elevated">
                  <item.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <div className="absolute top-10 left-1/2 hidden w-full border-t-2 border-dashed border-border md:block" style={{ display: index === 2 ? 'none' : undefined }} />
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm mb-3">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl mb-4">
              What Students Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of students who have found support through MindfulU.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-card shadow-soft animate-slide-up hover:shadow-card transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 text-sm">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              {
                q: 'Is my conversation private?',
                a: 'Absolutely! All conversations are end-to-end encrypted. We never share your data with anyone. Your privacy is our top priority.',
              },
              {
                q: 'How is an AI counselor different from a human counselor?',
                a: 'Our AI counselors are available 24/7, never judge, and can help with many common concerns. For serious mental health issues, we always recommend consulting with a licensed professional.',
              },
              {
                q: 'Is it really free?',
                a: 'Yes! We offer free sessions for students. Our mission is to make mental health support accessible to everyone.',
              },
              {
                q: 'What technology powers the AI avatar?',
                a: 'We use Beyond Presence AI technology to create lifelike, empathetic avatars that can understand emotions and respond naturally.',
              },
            ].map((faq, index) => (
              <div 
                key={index} 
                className="rounded-2xl border border-border/50 bg-card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-wellness/10 blur-3xl" />
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-5xl mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join MindfulU today and get the support you deserve. 
              It's free, confidential, and available whenever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild className="shadow-glow">
                <Link to="/login">
                  Get Started Now
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#avatar-demo">
                  Try Demo First
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <Heart className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-heading font-semibold text-foreground">MindfulU</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
              <a 
                href="https://www.beyondpresence.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Beyond Presence AI
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 MindfulU. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
