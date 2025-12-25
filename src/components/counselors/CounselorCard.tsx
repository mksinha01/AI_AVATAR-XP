import { Phone, Video, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CounselorCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  onVoiceCall: () => void;
  onVideoCall: () => void;
}

export function CounselorCard({
  title,
  description,
  icon: Icon,
  gradient,
  onVoiceCall,
  onVideoCall,
}: CounselorCardProps) {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
      <div className={`absolute inset-0 opacity-5 ${gradient}`} />
      <CardHeader className="relative pb-4">
        <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${gradient} shadow-soft`}>
          <Icon className="h-7 w-7 text-primary-foreground" />
        </div>
        <CardTitle className="font-heading text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="relative pt-0">
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={onVoiceCall}
            className="flex-1 gap-2"
          >
            <Phone className="h-4 w-4" />
            Voice Call
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={onVideoCall}
            className="flex-1 gap-2"
          >
            <Video className="h-4 w-4" />
            Video Call
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
