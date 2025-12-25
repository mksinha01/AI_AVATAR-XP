import { useState } from 'react';
import { Phone, CheckCircle, Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface PhoneCallDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  counselorCategory: string;
}

export function PhoneCallDialog({ open, onOpenChange, counselorCategory }: PhoneCallDialogProps) {
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length >= 6) {
      return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length >= 3) {
      return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    }
    return digits;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const digits = phone.replace(/\D/g, '');
    if (digits.length !== 10) {
      toast({
        title: 'Invalid phone number',
        description: 'Please enter a valid 10-digit phone number.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // This would call your n8n webhook in production
      // For now, simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast({
        title: 'Call request submitted',
        description: 'You will receive a call shortly from our AI counselor.',
      });

      setTimeout(() => {
        onOpenChange(false);
        setIsSuccess(false);
        setPhone('');
      }, 2000);
    } catch (error) {
      toast({
        title: 'Request failed',
        description: 'Unable to submit call request. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
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
            Enter your phone number and our AI counselor will call you for a {counselorCategory} session.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-wellness/10">
              <CheckCircle className="h-8 w-8 text-wellness" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Call Scheduled!</h3>
            <p className="text-center text-sm text-muted-foreground">
              You will receive a call shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="XXX-XXX-XXXX"
                value={phone}
                onChange={handlePhoneChange}
                className="text-lg tracking-wide"
                disabled={isSubmitting}
              />
              <p className="text-xs text-muted-foreground">
                US phone numbers only. Standard rates may apply.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="hero"
                className="flex-1"
                disabled={isSubmitting || phone.replace(/\D/g, '').length !== 10}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Phone className="h-4 w-4" />
                    Call Me
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
