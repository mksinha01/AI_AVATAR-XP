import { Phone, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface PhoneCallDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  counselorCategory: string;
}

const N8N_FORM_URL = 'http://localhost:5678/form/0751fa66-da39-4b7a-8d29-c0b9e8d4f722';

const categoryNames: Record<string, string> = {
  'health-wellness': 'Health & Wellness',
  'career-guidance': 'Career Guidance',
  'academic-support': 'Academic Support',
  'financial-advice': 'Financial Advice',
  'social-relationships': 'Social & Relationships',
  'personal-development': 'Personal Development',
};

export function PhoneCallDialog({ open, onOpenChange, counselorCategory }: PhoneCallDialogProps) {
  const handleOpenForm = () => {
    window.open(N8N_FORM_URL, '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-heading">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <Phone className="h-5 w-5 text-primary-foreground" />
            </div>
            Schedule Voice Call
          </DialogTitle>
          <DialogDescription>
            Fill out the form to schedule a voice call for your {categoryNames[counselorCategory] || counselorCategory.replace(/-/g, ' ')} session.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          <p className="text-sm text-muted-foreground">
            You'll be redirected to our secure scheduling form where you can:
          </p>
          
          <ul className="text-sm text-muted-foreground space-y-2 ml-4 list-disc">
            <li>Enter your contact details</li>
            <li>Choose your preferred date and time</li>
            <li>Describe your counseling needs</li>
          </ul>

          <p className="text-xs text-muted-foreground">
            The form will open in a new tab. You can return here after submitting.
          </p>
          
          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleOpenForm}
              className="flex-1 gap-2"
            >
              <Phone className="h-4 w-4" />
              Open Form
              <ExternalLink className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
