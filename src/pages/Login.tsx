import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Shield, Users, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Login() {
  const { user, loading, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user && !loading) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/dashboard');
    } catch (error: any) {
      toast({
        title: 'Sign in failed',
        description: error.message || 'Unable to sign in. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center gradient-hero">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero">
      <div className="container relative flex min-h-screen flex-col items-center justify-center px-4 py-16">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-wellness/5 blur-3xl" />
        </div>

        {/* Logo */}
        <div className="relative mb-8 flex items-center gap-3 animate-fade-in">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary shadow-elevated animate-float">
            <Heart className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="font-heading text-4xl font-bold text-foreground">MindfulU</h1>
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="rounded-3xl border border-border/50 bg-card/80 p-8 shadow-elevated backdrop-blur-sm">
            <div className="mb-8 text-center">
              <h2 className="mb-2 font-heading text-2xl font-semibold text-foreground">
                Welcome to Your Space
              </h2>
              <p className="text-muted-foreground">
                AI-powered counseling for college students. Get support anytime, anywhere.
              </p>
            </div>

            <Button
              variant="hero"
              size="xl"
              className="w-full"
              onClick={handleSignIn}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </Button>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              By signing in, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="relative mt-12 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Private & Secure</p>
              <p className="text-xs text-muted-foreground">Your conversations are safe</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-wellness/10">
              <Sparkles className="h-5 w-5 text-wellness" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">AI-Powered</p>
              <p className="text-xs text-muted-foreground">Available 24/7 for you</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-calm/10">
              <Users className="h-5 w-5 text-calm" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Expert Guidance</p>
              <p className="text-xs text-muted-foreground">Multiple counseling areas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
