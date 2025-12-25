import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LiveKitRoom, VideoConference, RoomAudioRenderer } from '@livekit/components-react';
import '@livekit/components-styles';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Phone, Loader2, Clock, AlertCircle } from 'lucide-react';

// Beyond Presence API configuration
const BEY_API_URL = 'https://api.bey.dev/v1';
const BEY_API_KEY = 'sk-HEzkoKrwkbWDuQyNUZyqDGwp95qdArU4fRGDuIvb3A8';
const BEY_AVATAR_ID = '694c83e2-8895-4a98-bd16-56332ca3f449';

interface SessionData {
  livekitUrl: string;
  livekitToken: string;
  callId: string;
}

const categoryNames: Record<string, string> = {
  'health-wellness': 'Health & Wellness',
  'career-guidance': 'Career Guidance',
  'academic-support': 'Academic Support',
  'financial-advice': 'Financial Advice',
  'social-relationships': 'Social & Relationships',
  'personal-development': 'Personal Development',
};

export default function VideoSession() {
  const { counselorId } = useParams<{ counselorId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sessionTime, setSessionTime] = useState(0);
  const [isConnected, setIsConnected] = useState(false);

  // Timer for session duration
  useEffect(() => {
    if (!isConnected) return;

    const interval = setInterval(() => {
      setSessionTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isConnected]);

  // Start Beyond Presence call
  useEffect(() => {
    async function startCall() {
      if (!user || !counselorId) return;

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${BEY_API_URL}/calls`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': BEY_API_KEY,
          },
          body: JSON.stringify({
            agent_id: BEY_AVATAR_ID,
            tags: { category: counselorId },
            livekit_username: user.displayName || user.email || 'User',
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `API error: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.livekit_url && data.livekit_token) {
          setSessionData({
            livekitUrl: data.livekit_url,
            livekitToken: data.livekit_token,
            callId: data.id,
          });
        } else {
          throw new Error('Invalid response from API');
        }
      } catch (err) {
        console.error('Error starting call:', err);
        setError(err instanceof Error ? err.message : 'Failed to start video session');
        toast({
          title: 'Connection failed',
          description: 'Unable to start video session. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    }

    startCall();
  }, [user, counselorId, toast]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = async () => {
    // End the Beyond Presence call
    if (sessionData?.callId) {
      try {
        await fetch(`${BEY_API_URL}/calls/${sessionData.callId}/end`, {
          method: 'POST',
          headers: {
            'x-api-key': BEY_API_KEY,
          },
        });
      } catch (err) {
        console.error('Error ending call:', err);
      }
    }

    toast({
      title: 'Session ended',
      description: `Your ${categoryNames[counselorId || '']} session lasted ${formatTime(sessionTime)}.`,
    });
    
    navigate('/dashboard');
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <div className="text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto animate-pulse-soft">
            <Loader2 className="h-10 w-10 text-primary animate-spin" />
          </div>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
            Connecting to your counselor...
          </h2>
          <p className="text-muted-foreground">
            Setting up your {categoryNames[counselorId || '']} session
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 mx-auto">
            <AlertCircle className="h-10 w-10 text-destructive" />
          </div>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
            Connection Failed
          </h2>
          <p className="text-muted-foreground mb-6">
            {error}
          </p>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
            <Button variant="hero" onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!sessionData) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gradient-to-b from-background/80 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Button variant="glass" size="sm" onClick={handleBack}>
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div className="hidden sm:block">
            <h1 className="font-heading font-semibold text-foreground">
              {categoryNames[counselorId || '']}
            </h1>
            <p className="text-xs text-muted-foreground">AI Counseling Session</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isConnected && (
            <div className="flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 backdrop-blur-sm border border-border/50">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-mono text-sm font-medium text-foreground">
                {formatTime(sessionTime)}
              </span>
            </div>
          )}
          <Button 
            variant="destructive" 
            size="sm"
            onClick={handleEndCall}
            className="gap-2"
          >
            <Phone className="h-4 w-4" />
            End Call
          </Button>
        </div>
      </header>

      {/* Video Conference */}
      <div className="flex-1">
        <LiveKitRoom
          serverUrl={sessionData.livekitUrl}
          token={sessionData.livekitToken}
          connect={true}
          onConnected={() => setIsConnected(true)}
          onDisconnected={() => setIsConnected(false)}
          style={{ height: '100vh' }}
        >
          <VideoConference />
          <RoomAudioRenderer />
        </LiveKitRoom>
      </div>
    </div>
  );
}