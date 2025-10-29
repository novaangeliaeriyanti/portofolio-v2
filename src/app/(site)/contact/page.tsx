'use client';

import Image from 'next/image';
import { Send } from 'lucide-react';
import { useState } from 'react';
import Container from '@/components/ui/Container';
import { projectInquiryData as data } from '@/data/contact';
import { FormData } from '@/types/types';
import { installationServicesData } from '@/data/services';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container className="py-20">
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="bg-primary/20 rounded-tr-4xl shadow-sm p-10 border-2 border-foreground">
          <div className="mb-6 space-y-1">
            <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
            <p className="text-sm">
              You can reach us anytime via{' '}
              <a
                href="mailto:hello@untitledui.com"
                className="font-medium text-primary"
              >
                hello@untitledui.com
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {data.formFields.map((field, i) =>
              field.type === 'textarea' ? (
                <textarea
                  key={i}
                  name={field.name}
                  placeholder={field.placeholder}
                  rows={4}
                  value={field.name as keyof FormData}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background rounded-lg border border-zinc-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition resize-none"
                />
              ) : (
                <input
                  key={i}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={field.name as keyof FormData}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background rounded-lg border border-zinc-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
                />
              )
            )}

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
            >
              {data.button.label}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-4">
          <div className="">
            <Image
              src={data.images[1]}
              alt="Project visual 2"
              width={400}
              height={300}
              className="object-cover w-full h-[200px] rounded-l-4xl shadow-md"
            />
          </div>
          <div className="relative">
            <Image
              src={data.images[0]}
              alt="Main project image"
              width={700}
              height={500}
              className="rounded-bl-4xl object-cover w-full h-[480px] md:h-full"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-xl p-6 rounded-bl-4xl shadow-md">
              <div className=" space-x-4 flex items-center justify-center">
                <Button className="bg-primary text-black hover:bg-primary/50">
                  {installationServicesData.ctaPrimary.label}
                </Button>
                <p className="text-small">
                  Or call us at{' '}
                  <a
                    href={installationServicesData.contactPhone.href}
                    className="font-semibold text-primary hover:underline"
                  >
                    {installationServicesData.contactPhone.label}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
