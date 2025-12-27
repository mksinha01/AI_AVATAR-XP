import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';

interface VideoCallDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  counselorCategory: string;
  onConfirmAgent: () => void;
}

export function VideoCallDialog({ 
  open, 
  onOpenChange, 
  counselorCategory,
  onConfirmAgent 
}: VideoCallDialogProps) {
  const categoryNames: Record<string, string> = {
    'health-wellness': 'Health & Wellness',
    'career-guidance': 'Career Guidance',
    'academic-support': 'Academic Support',
    'financial-advice': 'Financial Advice',
    'social-relationships': 'Social & Relationships',
    'personal-development': 'Personal Development',
  };

  const handleStartCall = () => {
    onConfirmAgent();
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Video className="h-5 w-5 text-primary" />
            Video Call Setup
          </DialogTitle>
          <DialogDescription>
            Starting video session for {categoryNames[counselorCategory] || 'AI Counseling'}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Instructions */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Before starting your video call:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Ensure your camera and microphone are working</li>
              <li>Find a quiet place for the session</li>
              <li>Allow camera and microphone permissions when prompted</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleCancel}
            variant="outline"
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleStartCall}
            className="flex-1"
          >
            Start Video Call
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
