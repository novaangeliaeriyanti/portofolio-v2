'use client';

import Image from 'next/image';
import { Send } from 'lucide-react';
import { useState } from 'react';
import Container from '@/components/ui/Container';
import { projectInquiryData as data } from '@/data/contact';
import { FormData } from '@/types/types';

export default function ProjectInquiry() {
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
    <Container className="relative py-16 space-y-8 rounded-2xl overflow-hidden">
      <div className="mx-auto grid lg:grid-cols-2 items-center gap-10">
        <div className="relative z-10">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase text-primary">
              {data.eyebrow}
            </p>
            <h2 className="text-3xl font-bold mt-1">{data.title}</h2>
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
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition resize-none"
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
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none transition"
                />
              )
            )}

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
            >
              {data.button.label}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="relative grid grid-rows-2 gap-4">
          <div className="pl-5">
            <Image
              src={data.images[0]}
              alt="Project visual 1"
              width={400}
              height={300}
              className="object-cover w-full h-[200px] rounded-2xl shadow-md"
            />
          </div>
          <div className="pr-5">
            <Image
              src={data.images[1]}
              alt="Project visual 2"
              width={400}
              height={300}
              className="object-cover w-full h-[200px] rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url('${data.backgroundPattern}')`,
          backgroundRepeat: 'repeat',
        }}
      />
    </Container>
  );
}
