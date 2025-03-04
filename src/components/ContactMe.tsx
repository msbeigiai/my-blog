import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Send, User, Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Initialize the form with react-hook-form and zod
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission (replace with your actual submission logic)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-950 p-4">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 text-zinc-100 shadow-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-zinc-100 flex items-center gap-3">
            <Send className="w-8 h-8 text-purple-400" />
            Contact Me
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Got a question or want to collaborate? Drop me a message!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-zinc-300">
                      <User className="w-4 h-4 text-purple-400" /> Name
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your Name" 
                        {...field} 
                        className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:ring-2 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-zinc-300">
                      <Mail className="w-4 h-4 text-purple-400" /> Email
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your@email.com" 
                        {...field} 
                        className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:ring-2 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-zinc-300">
                      <MessageCircle className="w-4 h-4 text-purple-400" /> Message
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Write your message here..." 
                        {...field} 
                        className="bg-zinc-800 border-zinc-700 text-zinc-100 min-h-[120px] focus:ring-2 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-br from-purple-500/50 to-pink-500/50 text-white transition-colors duration-300 cursor-pointer"
                // bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              
              {submitSuccess && (
                <div className="text-green-500 text-center mt-4">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;