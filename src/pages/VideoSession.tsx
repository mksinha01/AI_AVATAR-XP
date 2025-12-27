import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const categoryNames: Record<string, string> = {
  'health-wellness': 'Health & Wellness',
  'career-guidance': 'Career Guidance',
  'academic-support': 'Academic Support',
  'financial-advice': 'Financial Advice',
  'social-relationships': 'Social & Relationships',
  'personal-development': 'Personal Development',
};

const counselorNames: Record<string, string> = {
  'health-wellness': 'Dr. Priya Sharma',
  'career-guidance': 'Arjun Mehta',
  'academic-support': 'Dr. Anjali Reddy',
  'financial-advice': 'Rahul Kapoor',
  'social-relationships': 'Neha Patel',
  'personal-development': 'Rohan Gupta',
};

const agentIframeUrls: Record<string, string> = {
  'health-wellness': 'https://bey.chat/97da2b5a-55b1-40d4-b3c0-76ced9901977',
  'career-guidance': 'https://bey.chat/99e09edc-a417-455a-86ef-5efd13f61c9b',
  'academic-support': 'https://bey.chat/3a66ed20-22b7-426b-96c6-e916e43b4d8f',
  'financial-advice': 'https://bey.chat/860e0af4-905c-40c7-979c-6f15f73d9332',
  'social-relationships': 'https://bey.chat/55590705-9528-4022-9550-70b724c962d8',
  'personal-development': 'https://bey.chat/201641c2-e9bf-4ebf-b891-4928923d6699',
};

export default function VideoSession() {
  const { counselorId } = useParams<{ counselorId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
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

  // Main video session with iframe
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
              {counselorNames[counselorId || ''] || 'AI Counselor'}
            </h1>
            <p className="text-xs text-muted-foreground">
              {categoryNames[counselorId || ''] || 'AI Counseling'} - Video Session
            </p>
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
      <div className="flex-1 bg-black">
        <iframe 
          src={agentIframeUrls[counselorId || ''] || 'https://bey.chat/55590705-9528-4022-9550-70b724c962d8'} 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowFullScreen
          allow="camera; microphone; fullscreen"
          style={{ 
            border: 'none', 
            maxWidth: '100%',
            height: 'calc(100vh - 73px)'
          }}
          title={`Video Session with ${counselorNames[counselorId || ''] || 'AI Counselor'}`}
        />
      </div>
    </div>
  );
}
