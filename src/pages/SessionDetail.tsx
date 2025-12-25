import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  Download, 
  Trash2, 
  Video, 
  Clock, 
  Calendar,
  User,
  Bot
} from 'lucide-react';

// Mock session data
const mockSession = {
  id: '1',
  category: 'Health & Wellness',
  type: 'video',
  date: new Date(Date.now() - 1000 * 60 * 60 * 2),
  duration: 1245,
  transcript: [
    { role: 'assistant', content: "Hello! Welcome to your Health & Wellness counseling session. I'm here to support you today. How are you feeling?" },
    { role: 'user', content: "I've been feeling pretty stressed lately with exams coming up." },
    { role: 'assistant', content: "I understand. Exam periods can be incredibly stressful. Can you tell me more about what specifically is causing you the most stress?" },
    { role: 'user', content: "I think it's the fear of not doing well, and I've been having trouble sleeping because of it." },
    { role: 'assistant', content: "That's a very common experience, and it's good that you're recognizing these patterns. Sleep disruption and exam anxiety often go hand in hand. Let's work on some strategies that might help you manage both. First, have you tried any relaxation techniques before bed?" },
    { role: 'user', content: "Not really. I usually just scroll through my phone until I fall asleep." },
    { role: 'assistant', content: "Phone use before bed can actually make it harder to fall asleep due to the blue light and mental stimulation. I'd recommend trying a screen-free wind-down routine about 30 minutes before bed. Would you like me to suggest some specific relaxation techniques that work well for students?" },
  ],
};

export default function SessionDetail() {
  const { sessionId } = useParams<{ sessionId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const session = mockSession; // In production, fetch by sessionId

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  const handleDownload = () => {
    const content = session.transcript
      .map((msg) => `${msg.role === 'assistant' ? 'Counselor' : 'You'}: ${msg.content}`)
      .join('\n\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `session-${sessionId}-transcript.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: 'Downloaded',
      description: 'Transcript has been downloaded.',
    });
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: 'Session deleted',
      description: 'The session has been removed from your history.',
    });
    
    navigate('/sessions');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        {/* Back button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6 -ml-2"
          asChild
        >
          <Link to="/sessions">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Sessions
          </Link>
        </Button>

        {/* Session header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Video className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h1 className="font-heading text-2xl font-bold text-foreground">
                  {session.category}
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary">Video Call</Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete this session?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. The session and its transcript will be permanently deleted.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDelete}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      disabled={isDeleting}
                    >
                      {isDeleting ? 'Deleting...' : 'Delete'}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          {/* Session info */}
          <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(session.date)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {formatDuration(session.duration)}
            </div>
          </div>
        </div>

        {/* Transcript */}
        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle className="font-heading">Session Transcript</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {session.transcript.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    message.role === 'assistant' 
                      ? 'bg-primary/10' 
                      : 'bg-secondary'
                  }`}>
                    {message.role === 'assistant' ? (
                      <Bot className="h-5 w-5 text-primary" />
                    ) : (
                      <User className="h-5 w-5 text-secondary-foreground" />
                    )}
                  </div>
                  <div className={`flex-1 ${message.role === 'user' ? 'text-right' : ''}`}>
                    <p className="text-xs text-muted-foreground mb-1">
                      {message.role === 'assistant' ? 'AI Counselor' : 'You'}
                    </p>
                    <div className={`inline-block rounded-2xl px-4 py-3 ${
                      message.role === 'assistant'
                        ? 'bg-muted text-foreground'
                        : 'bg-primary text-primary-foreground'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}