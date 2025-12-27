import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Heart, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  Smile,
  Sun,
  Moon,
  Coffee,
  BookOpen,
  Briefcase,
  Users,
  Target,
  CheckCircle
} from 'lucide-react';

const interests = [
  { id: 'stress', label: 'Stress Management', icon: Coffee },
  { id: 'anxiety', label: 'Anxiety Support', icon: Heart },
  { id: 'academic', label: 'Academic Help', icon: BookOpen },
  { id: 'career', label: 'Career Guidance', icon: Briefcase },
  { id: 'relationships', label: 'Relationships', icon: Users },
  { id: 'goals', label: 'Goal Setting', icon: Target },
];

const moods = [
  { value: 'great', label: 'Doing great! 😊', color: 'bg-wellness/20 border-wellness text-wellness' },
  { value: 'okay', label: 'Okay, could be better 😐', color: 'bg-calm/20 border-calm text-calm' },
  { value: 'struggling', label: 'Struggling a bit 😔', color: 'bg-primary/20 border-primary text-primary' },
  { value: 'need-help', label: 'Need support 🤗', color: 'bg-primary/30 border-primary text-primary' },
];

export default function Onboarding() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nickname: user?.displayName?.split(' ')[0] || '',
    currentMood: '',
    interests: [] as string[],
    goals: '',
    preferredTime: 'anytime',
  });

  const totalSteps = 4;

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(i => i !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Save to localStorage for now (can be extended to backend)
      localStorage.setItem('mindfulU_onboarding', JSON.stringify(formData));
      localStorage.setItem('mindfulU_onboarded', 'true');
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.nickname.trim().length > 0;
      case 2:
        return formData.currentMood !== '';
      case 3:
        return formData.interests.length > 0;
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-wellness/5 blur-3xl" />
      </div>

      <Card className="relative w-full max-w-xl border-border/50 shadow-elevated animate-scale-in">
        <CardHeader className="text-center pb-2">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl gradient-primary">
            <Heart className="h-6 w-6 text-primary-foreground" />
          </div>
          <CardTitle className="font-heading text-2xl">
            {step === 1 && "Welcome to MindfulU! 👋"}
            {step === 2 && "How are you feeling today?"}
            {step === 3 && "What brings you here?"}
            {step === 4 && "Almost done!"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Let's get to know you a little better so we can personalize your experience."}
            {step === 2 && "No judgment here - just checking in to understand how we can help."}
            {step === 3 && "Select the areas you'd like support in. Pick as many as you want!"}
            {step === 4 && "Any goals or preferences you'd like to share?"}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}% complete</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full gradient-primary transition-all duration-500 ease-out"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Name */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="nickname" className="text-foreground">
                  What should we call you?
                </Label>
                <Input
                  id="nickname"
                  placeholder="Your preferred name..."
                  value={formData.nickname}
                  onChange={(e) => setFormData(prev => ({ ...prev, nickname: e.target.value }))}
                  className="text-lg py-6"
                />
                <p className="text-xs text-muted-foreground">
                  This is just for us to address you personally. You can use a nickname!
                </p>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm text-foreground">
                  Everything you share is <strong>100% confidential</strong> and helps us personalize your counseling experience.
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Mood */}
          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <RadioGroup
                value={formData.currentMood}
                onValueChange={(value) => setFormData(prev => ({ ...prev, currentMood: value }))}
                className="grid gap-3"
              >
                {moods.map((mood) => (
                  <div key={mood.value} className="relative">
                    <RadioGroupItem
                      value={mood.value}
                      id={mood.value}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={mood.value}
                      className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all
                        ${formData.currentMood === mood.value 
                          ? mood.color + ' border-2' 
                          : 'border-border bg-card hover:border-primary/30'
                        }`}
                    >
                      <span className="text-2xl">{mood.label.split(' ').pop()}</span>
                      <span className="font-medium">{mood.label.replace(/\s\S+$/, '')}</span>
                      {formData.currentMood === mood.value && (
                        <CheckCircle className="h-5 w-5 ml-auto" />
                      )}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <p className="text-center text-sm text-muted-foreground pt-2">
                It's okay to not be okay. We're here for you! 💙
              </p>
            </div>
          )}

          {/* Step 3: Interests */}
          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <div
                    key={interest.id}
                    onClick={() => handleInterestToggle(interest.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all
                      ${formData.interests.includes(interest.id)
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-card hover:border-primary/30'
                      }`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg 
                      ${formData.interests.includes(interest.id) ? 'bg-primary/20' : 'bg-muted'}`}>
                      <interest.icon className={`h-5 w-5 ${formData.interests.includes(interest.id) ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <span className={`text-sm font-medium ${formData.interests.includes(interest.id) ? 'text-primary' : 'text-foreground'}`}>
                      {interest.label}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Selected: {formData.interests.length} area{formData.interests.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}

          {/* Step 4: Goals & Preferences */}
          {step === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <Label htmlFor="goals" className="text-foreground">
                  What are you hoping to achieve? (Optional)
                </Label>
                <Textarea
                  id="goals"
                  placeholder="e.g., I want to manage my stress better, feel more confident in interviews..."
                  value={formData.goals}
                  onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                  className="min-h-[100px] resize-none"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-foreground">When do you prefer to have sessions?</Label>
                <RadioGroup
                  value={formData.preferredTime}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, preferredTime: value }))}
                  className="flex flex-wrap gap-3"
                >
                  {[
                    { value: 'morning', label: 'Morning', icon: Sun },
                    { value: 'evening', label: 'Evening', icon: Moon },
                    { value: 'anytime', label: 'Anytime', icon: Smile },
                  ].map((time) => (
                    <div key={time.value} className="flex-1 min-w-[100px]">
                      <RadioGroupItem value={time.value} id={time.value} className="peer sr-only" />
                      <Label
                        htmlFor={time.value}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all
                          ${formData.preferredTime === time.value
                            ? 'border-primary bg-primary/10'
                            : 'border-border bg-card hover:border-primary/30'
                          }`}
                      >
                        <time.icon className={`h-6 w-6 ${formData.preferredTime === time.value ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className="text-sm font-medium">{time.label}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-wellness/10 border border-wellness/20">
                <CheckCircle className="h-5 w-5 text-wellness flex-shrink-0" />
                <p className="text-sm text-foreground">
                  You're all set! Click below to start exploring MindfulU.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-4 border-t border-border/50">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={step === 1}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <Button
              variant="hero"
              onClick={handleNext}
              disabled={!canProceed()}
              className="gap-2"
            >
              {step === totalSteps ? 'Start Exploring' : 'Continue'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
