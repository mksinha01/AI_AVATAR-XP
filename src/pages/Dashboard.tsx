import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { CounselorCard } from '@/components/counselors/CounselorCard';
import { PhoneCallDialog } from '@/components/calls/PhoneCallDialog';
import { VideoCallDialog } from '@/components/calls/VideoCallDialog';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Heart, 
  Briefcase, 
  BookOpen, 
  DollarSign, 
  Users, 
  Star,
  Sparkles
} from 'lucide-react';

const counselorCategories = [
  {
    id: 'health-wellness',
    title: 'Health & Wellness',
    description: 'Mental health support, stress management, and overall wellbeing guidance.',
    icon: Heart,
    gradient: 'gradient-primary',
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    description: 'Career planning, interview prep, and professional development advice.',
    icon: Briefcase,
    gradient: 'gradient-calm',
  },
  {
    id: 'academic-support',
    title: 'Academic Support',
    description: 'Study strategies, time management, and academic planning assistance.',
    icon: BookOpen,
    gradient: 'gradient-wellness',
  },
  {
    id: 'financial-advice',
    title: 'Financial Advice',
    description: 'Budgeting, student loans, and financial planning for students.',
    icon: DollarSign,
    gradient: 'gradient-calm',
  },
  {
    id: 'social-relationships',
    title: 'Social & Relationships',
    description: 'Building connections, communication skills, and relationship guidance.',
    icon: Users,
    gradient: 'gradient-primary',
  },
  {
    id: 'personal-development',
    title: 'Personal Development',
    description: 'Goal setting, self-improvement, and building healthy habits.',
    icon: Star,
    gradient: 'gradient-wellness',
  },
];

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [phoneDialogOpen, setPhoneDialogOpen] = useState(false);
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleVoiceCall = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setPhoneDialogOpen(true);
  };

  const handleVideoCall = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setVideoDialogOpen(true);
  };

  const handleConfirmVideoAgent = () => {
    navigate(`/video-session/${selectedCategory}`);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const firstName = user?.displayName?.split(' ')[0] || 'there';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Welcome section */}
        <div className="mb-10 animate-fade-in">
          <div className="flex items-center gap-2 text-primary mb-2">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm font-medium">AI Counseling Platform</span>
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            {getGreeting()}, {firstName}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Choose a counselor category to start your session. We're here to help.
          </p>
        </div>

        {/* Counselor categories grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {counselorCategories.map((category, index) => (
            <div 
              key={category.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CounselorCard
                id={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                gradient={category.gradient}
                onVoiceCall={() => handleVoiceCall(category.id)}
                onVideoCall={() => handleVideoCall(category.id)}
              />
            </div>
          ))}
        </div>

        {/* Info section */}
        <div className="mt-12 rounded-2xl border border-border/50 bg-card/50 p-6 back   op-blur-sm animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="font-heading text-lg font-semibold text-foreground mb-2">
            How it works
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                1
              </div>
              <div>
                <p className="font-medium text-foreground">Choose a category</p>
                <p className="text-sm text-muted-foreground">Select the area you'd like guidance in</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                2
              </div>
              <div>
                <p className="font-medium text-foreground">Start your session</p>
                <p className="text-sm text-muted-foreground">Choose voice or video call</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                3
              </div>
              <div>
                <p className="font-medium text-foreground">Get support</p>
                <p className="text-sm text-muted-foreground">Talk with our AI counselor anytime</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PhoneCallDialog
        open={phoneDialogOpen}
        onOpenChange={setPhoneDialogOpen}
        counselorCategory={selectedCategory}
      />

      <VideoCallDialog
        open={videoDialogOpen}
        onOpenChange={setVideoDialogOpen}
        counselorCategory={selectedCategory}
        onConfirmAgent={handleConfirmVideoAgent}
      />
    </div>
  );
}
