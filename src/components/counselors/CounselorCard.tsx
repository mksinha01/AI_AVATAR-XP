import { Phone, Video, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CounselorCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  avatarUrl?: string;
  onVoiceCall: () => void;
  onVideoCall: () => void;
}

const avatarImages: Record<string, string> = {
  'health-wellness': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
  'career-guidance': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
  'academic-support': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
  'financial-advice': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  'social-relationships': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
  'personal-development': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
};

const counselorNames: Record<string, string> = {
  'health-wellness': 'Dr. Sarah',
  'career-guidance': 'Alex',
  'academic-support': 'Dr. Maya',
  'financial-advice': 'James',
  'social-relationships': 'Emma',
  'personal-development': 'Michael',
};

export function CounselorCard({
  id,
  title,
  description,
  icon: Icon,
  gradient,
  onVoiceCall,
  onVideoCall,
}: CounselorCardProps) {
  const avatarUrl = avatarImages[id] || '';
  const counselorName = counselorNames[id] || 'AI Counselor';

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
      <div className={`absolute inset-0 opacity-5 ${gradient}`} />
      <CardHeader className="relative pb-4">
        <div className="flex items-start gap-4">
          {/* Avatar Face */}
          <div className="relative">
            <div className={`absolute inset-0 rounded-full ${gradient} opacity-30 blur-sm scale-110`} />
            <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-border/50 shadow-soft">
              {avatarUrl ? (
                <img 
                  src={avatarUrl} 
                  alt={`${counselorName} - ${title} Counselor`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <div className={`h-full w-full flex items-center justify-center ${gradient}`}>
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
              )}
            </div>
            {/* Online indicator */}
            <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-wellness border-2 border-card animate-pulse" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <CardTitle className="font-heading text-lg truncate">{counselorName}</CardTitle>
              <div className={`flex h-6 w-6 items-center justify-center rounded-lg ${gradient} shadow-sm`}>
                <Icon className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
            </div>
            <p className="text-sm font-medium text-primary">{title}</p>
            <CardDescription className="text-muted-foreground text-xs mt-1 line-clamp-2">{description}</CardDescription>
          </div>
        </div>
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
            Voice
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={onVideoCall}
            className="flex-1 gap-2"
          >
            <Video className="h-4 w-4" />
            Video
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
