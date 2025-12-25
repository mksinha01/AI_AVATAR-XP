import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';

const categoryNames: Record<string, string> = {
  'health-wellness': 'Health & Wellness',
  'career-guidance': 'Career Guidance',
  'academic-support': 'Academic Support',
  'financial-advice': 'Financial Advice',
  'social-relationships': 'Social & Relationships',
  'personal-development': 'Personal Development',
};

const BEY_CHAT_URL = 'https://bey.chat/55590705-9528-4022-9550-70b724c962d8';

export default function VideoSession() {
  const { counselorId } = useParams<{ counselorId: string }>();
  const navigate = useNavigate();
  const [sessionTime, setSessionTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSessionTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-border/50 bg-card/80 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={handleBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="hidden sm:block">
            <h1 className="font-heading font-semibold text-foreground">
              {categoryNames[counselorId || ''] || 'AI Counseling'}
            </h1>
            <p className="text-xs text-muted-foreground">Video Session</p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 border border-border/50">
          <Clock className="h-4 w-4 text-primary" />
          <span className="font-mono text-sm font-medium text-foreground">
            {formatTime(sessionTime)}
          </span>
        </div>
      </header>

      {/* Video iframe */}
      <div className="flex-1 w-full">
        <iframe
          src={BEY_CHAT_URL}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          allow="camera; microphone; fullscreen"
          style={{ border: 'none', minHeight: 'calc(100vh - 73px)' }}
          title="AI Counselor Video Session"
        />
      </div>
    </div>
  );
}
