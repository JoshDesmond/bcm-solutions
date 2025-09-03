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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export const Contact: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<EmailSendStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sfSkylineImage = 'https://images.unsplash.com/photo-1656716705147-7ab83f50e956?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

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
    <section id="contact" className="relative py-16 bg-white overflow-hidden">
      {/* Background image - optimized for performance */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${sfSkylineImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.1,
          transform: 'scale(1.1)',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-[#0F4C5C] text-3xl font-semibold text-center">Get in touch</h2>
          <p className="mt-4 text-[#36454F] text-lg leading-relaxed text-center">
            Interested in learning more? Please reach out with the form below, or write to{' '}
            <a 
              href="mailto:info@bcmconsultingllc.com" 
              className="text-[#0F4C5C] hover:text-[#0F4C5C]/80 underline transition-colors duration-200"
            >
              info@bcmconsultingllc.com
            </a>
          </p>
          
          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800 text-center">
                Thank you for your message! I'll get back to you within 24 hours.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800 text-center">
                {errorMessage}
              </p>
            </div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#36454F] font-medium">Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-gray-300 focus:border-[#0F4C5C] focus:ring-[#0F4C5C] focus:ring-2 focus:ring-opacity-20 transition-all duration-200" />
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
                    <FormLabel className="text-[#36454F] font-medium">Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" className="border-gray-300 focus:border-[#0F4C5C] focus:ring-[#0F4C5C] focus:ring-2 focus:ring-opacity-20 transition-all duration-200" />
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
                    <FormLabel className="text-[#36454F] font-medium">Tell me about your project</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={4} className="border-gray-300 focus:border-[#0F4C5C] focus:ring-[#0F4C5C] focus:ring-2 focus:ring-opacity-20 transition-all duration-200" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                disabled={submitStatus === 'sending'}
                className="w-full bg-gradient-to-r from-[#0F4C5C] to-[#0F4C5C]/90 hover:from-[#0F4C5C]/90 hover:to-[#0F4C5C] text-white px-6 py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:scale-[1.02]"
              >
                {submitStatus === 'sending' ? 'Sending...' : 'Schedule Consultation'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
