import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, ArrowLeft, Download } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  website: z.string().url("Please enter a valid website URL").optional().or(z.literal("")),
  agreeToComms: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

interface EbookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EBOOK_DATA = {
  id: "ecommerce-trends-2026",
  title: "Top E-Commerce Trends for 2026",
  subtitle: "Gain a competitive edge with actionable insights and future-ready e-commerce strategies.",
  downloadUrl: "https://drive.google.com/file/d/14EYmPQtdkyfF47m587OPPFa8qV-J7rvT/view?usp=drive_link",
  coverImage: "/lovable-uploads/a031652f-4904-456e-8696-37f75d157932.png"
};

export const EbookDialog: React.FC<EbookDialogProps> = ({ open, onOpenChange }) => {
  const [step, setStep] = useState<"selection" | "form">("selection");
  const [selectedEbook, setSelectedEbook] = useState<typeof EBOOK_DATA | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const agreeToComms = watch("agreeToComms");

  const handleReadMore = (ebook: typeof EBOOK_DATA) => {
    setSelectedEbook(ebook);
    setStep("form");
  };

  const handleBack = () => {
    setStep("selection");
    setSelectedEbook(null);
  };

  const onSubmit = (data: FormData) => {
    if (!selectedEbook) return;

    toast({
      title: "Download Started",
      description: "Your e-book download will begin shortly.",
    });

    // Open the download link
    window.open(selectedEbook.downloadUrl, "_blank");

    // Reset form and close dialog
    reset();
    setStep("selection");
    setSelectedEbook(null);
    onOpenChange(false);
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      setStep("selection");
      setSelectedEbook(null);
      reset();
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {step === "selection" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center">
                Choose Your E-Book
              </DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={EBOOK_DATA.coverImage}
                    alt={EBOOK_DATA.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    {EBOOK_DATA.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {EBOOK_DATA.subtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => handleReadMore(EBOOK_DATA)}
                    className="w-full"
                    variant="outline"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <>
            <DialogHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Selection
                </Button>
              </div>
              <DialogTitle className="text-2xl font-bold text-center">
                Download: {selectedEbook?.title}
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    {...register("fullName")}
                    placeholder="Enter your full name"
                    className={errors.fullName ? "border-destructive" : ""}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Company Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your company email"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="Enter your phone number"
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    {...register("company")}
                    placeholder="Enter your company name"
                    className={errors.company ? "border-destructive" : ""}
                  />
                  {errors.company && (
                    <p className="text-sm text-destructive">{errors.company.message}</p>
                  )}
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="website">Website URL</Label>
                  <Input
                    id="website"
                    {...register("website")}
                    placeholder="Enter your website URL (optional)"
                    className={errors.website ? "border-destructive" : ""}
                  />
                  {errors.website && (
                    <p className="text-sm text-destructive">{errors.website.message}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToComms"
                  checked={agreeToComms}
                  onCheckedChange={(checked) => setValue("agreeToComms", !!checked)}
                />
                <Label htmlFor="agreeToComms" className="text-sm leading-relaxed">
                  I agree to receive other communications from BKPlus Software
                </Label>
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download E-book
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};