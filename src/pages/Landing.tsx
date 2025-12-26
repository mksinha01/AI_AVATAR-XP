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
  MessageCircle
} from 'lucide-react';

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
];

const counselingAreas = [
  { icon: Heart, title: 'Health & Wellness', color: 'bg-primary/10 text-primary' },
  { icon: Briefcase, title: 'Career Guidance', color: 'bg-calm/10 text-calm' },
  { icon: BookOpen, title: 'Academic Support', color: 'bg-wellness/10 text-wellness' },
  { icon: DollarSign, title: 'Financial Advice', color: 'bg-calm/10 text-calm' },
  { icon: Users, title: 'Relationships', color: 'bg-primary/10 text-primary' },
  { icon: Star, title: 'Personal Growth', color: 'bg-wellness/10 text-wellness' },
];

const testimonials = [
  {
    quote: "MindfulU helped me manage my exam stress. The AI counselor was surprisingly understanding and helpful.",
    author: "Sarah M.",
    role: "Computer Science Student",
  },
  {
    quote: "I was skeptical at first, but the career guidance session really helped me prepare for interviews.",
    author: "James L.",
    role: "Business Major",
  },
  {
    quote: "Having 24/7 access to support has been a game-changer for my mental health journey.",
    author: "Emily R.",
    role: "Psychology Student",
  },
];

export default function Landing() {
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
            <a href="#areas" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Counseling Areas
            </a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Testimonials
            </a>
          </nav>

          <Button variant="hero" size="sm" asChild>
            <Link to="/login">
              Sign In
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-wellness/5 blur-3xl" />
        </div>

        <div className="container relative py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary animate-fade-in">
              <Sparkles className="h-4 w-4" />
              AI-Powered Mental Health Support for Students
            </div>
            
            <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight text-foreground md:text-6xl animate-slide-up">
              Your Personal AI Counselor,{' '}
              <span className="bg-gradient-to-r from-primary to-wellness bg-clip-text text-transparent">
                Available 24/7
              </span>
            </h1>
            
            <p className="mb-10 text-lg text-muted-foreground md:text-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Get confidential mental health support, career guidance, and academic advice 
              through video or voice calls with our understanding AI counselors.
            </p>
            
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/login">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#features">
                  Learn More
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {[
              { value: '10K+', label: 'Students Helped' },
              { value: '24/7', label: 'Availability' },
              { value: '6', label: 'Counseling Areas' },
              { value: '100%', label: 'Confidential' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">Get personalized support</p>
                </div>
                <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
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
                title: 'Sign Up',
                description: 'Create your free account with Google Sign-In. No credit card required.',
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
                description: 'Connect via video or voice call and start your counseling session.',
                icon: Video,
              },
            ].map((item, index) => (
              <div key={index} className="relative text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full gradient-primary shadow-elevated">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute top-8 left-1/2 hidden w-full border-t-2 border-dashed border-border md:block" style={{ transform: index === 2 ? 'none' : 'translateX(50%)' }} />
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

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-card shadow-soft animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join MindfulU today and get the support you deserve. 
              It's free, confidential, and available whenever you need it.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/login">
                Get Started Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
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
