import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useEmailSend, { EmailSendStatus } from './useEmailSend';

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  service: z.enum([
    "CMC Regulatory Strategy",
    "Process Development",
    "CDMO Management",
    "Tech Transfer",
    "Characterization & Validation",
    "Investment Due Diligence",
    "Not sure yet"
  ]),
  message: z.string().min(1, "Message is required")
});

type FormValues = z.infer<typeof formSchema>;

const fieldStyles =
  "border-rule bg-paper font-body text-ink focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all duration-200";

const labelStyles = "font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink/75";

export const Contact: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<EmailSendStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { sendEmail } = useEmailSend({
    onStatusChange: (status, errorMsg) => {
      setSubmitStatus(status);
      if (errorMsg) setErrorMessage(errorMsg);
    }
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "Not sure yet",
      message: ""
    },
  });

  async function onSubmit(data: FormValues) {
    const success = await sendEmail(data);
    if (success) {
      form.reset();
    }
  }

  return (
    <section id="contact" className="relative surface-tint py-24 md:py-28 overflow-hidden">
      {/* Brand wash behind the form, replacing the generic stock backdrop */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-brand/[0.07] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-10 animate-rise">
            <p className="eyebrow text-copper-deep mb-5">Start a Conversation</p>
            <h2 className="text-title">Get in touch</h2>
            <div className="mx-auto mt-5 h-px w-20 bg-copper" />
            <p className="mt-5 text-ink/80 text-lg leading-relaxed">
              Interested in learning more? Please reach out with the form below, or write to{' '}
              <a 
                href="mailto:info@bcmconsultingllc.com" 
                className="font-mono text-sm text-brand underline decoration-copper decoration-2 underline-offset-4 hover:text-copper transition-colors duration-200"
              >
                info@bcmconsultingllc.com
              </a>
            </p>
          </div>

          <div className="bg-paper rounded-xl shadow-card border border-rule/70 p-8 md:p-10 animate-rise animate-delay-2">
            {submitStatus === 'success' && (
              <div className="mb-6 border-l-2 border-brand bg-brand-tint p-4">
                <p className="text-brand text-center">
                  Thank you for your message. We'll get back to you within 24 hours.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 border-l-2 border-destructive bg-destructive/5 p-4">
                <p className="text-destructive text-center">
                  {errorMessage}
                </p>
              </div>
            )}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelStyles}>Name</FormLabel>
                      <FormControl>
                        <Input {...field} className={fieldStyles} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelStyles}>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" className={fieldStyles} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelStyles}>Tell us about your project</FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={5} className={fieldStyles} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-copper hover:bg-copper-deep text-white font-mono text-xs uppercase tracking-[0.18em] h-auto px-6 py-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'sending' ? 'Sending…' : 'Schedule Consultation'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
