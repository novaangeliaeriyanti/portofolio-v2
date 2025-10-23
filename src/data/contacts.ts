export interface ContactInfo {
  icon: 'Phone' | 'Mail' | 'MapPin';
  title: string;
  desc: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: 'Phone',
    title: 'Phone',
    desc: '+62 812 3456 7890',
  },
  {
    icon: 'Mail',
    title: 'Email',
    desc: 'hello@ladybugstudio.com',
  },
  {
    icon: 'MapPin',
    title: 'Address',
    desc: 'Jakarta, Indonesia',
  },
];

export const newsletterData = {
  title: 'Our Newsletter',
  description:
    'Stay updated with our latest news, insights, and exclusive offers.',
  backgroundImage:
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
};
