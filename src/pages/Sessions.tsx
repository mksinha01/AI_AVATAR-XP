import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Video, 
  Phone, 
  Clock, 
  Calendar,
  ChevronRight,
  Inbox
} from 'lucide-react';

// Mock sessions data - in production this would come from your backend
const mockSessions = [
  {
    id: '1',
    category: 'Health & Wellness',
    type: 'video',
    date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    duration: 1245, // seconds
    hasTranscript: true,
  },
  {
    id: '2',
    category: 'Career Guidance',
    type: 'phone',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    duration: 892,
    hasTranscript: true,
  },
  {
    id: '3',
    category: 'Academic Support',
    type: 'video',
    date: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    duration: 1567,
    hasTranscript: false,
  },
];

export default function Sessions() {
  const [sessions] = useState(mockSessions);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      if (hours === 0) {
        const mins = Math.floor(diff / (1000 * 60));
        return `${mins} minutes ago`;
      }
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (days === 1) {
      return 'Yesterday';
    } else if (days < 7) {
      return `${days} days ago`;
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="font-heading text-3xl font-bold text-foreground">
            Session History
          </h1>
          <p className="mt-2 text-muted-foreground">
            View your past counseling sessions and transcripts.
          </p>
        </div>

        {sessions.length === 0 ? (
          <Card className="border-dashed animate-fade-in">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Inbox className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                No sessions yet
              </h2>
              <p className="text-center text-muted-foreground mb-6 max-w-sm">
                Start your first counseling session to see your history here.
              </p>
              <Button variant="hero" asChild>
                <Link to="/dashboard">Start a Session</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {sessions.map((session, index) => (
              <Card 
                key={session.id} 
                className="transition-all duration-300 hover:shadow-card hover:-translate-y-0.5 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        session.type === 'video' ? 'bg-primary/10' : 'bg-wellness/10'
                      }`}>
                        {session.type === 'video' ? (
                          <Video className="h-5 w-5 text-primary" />
                        ) : (
                          <Phone className="h-5 w-5 text-wellness" />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-base font-semibold">
                          {session.category}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {session.type === 'video' ? 'Video Call' : 'Voice Call'}
                          </Badge>
                          {session.hasTranscript && (
                            <Badge variant="outline" className="text-xs">
                              Transcript available
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/sessions/${session.id}`}>
                        View
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(session.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {formatDuration(session.duration)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}