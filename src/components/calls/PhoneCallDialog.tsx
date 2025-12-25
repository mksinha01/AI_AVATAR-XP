import { Phone } from 'lucide-react';
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
            Fill out the form to schedule a voice call for your {counselorCategory.replace(/-/g, ' ')} session.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <p className="text-sm text-muted-foreground mb-4">
            You'll be redirected to our scheduling form where you can enter your details and preferred call time.
          </p>
          
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              variant="hero"
              onClick={handleOpenForm}
              className="flex-1"
            >
              <Phone className="h-4 w-4" />
              Open Form
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
