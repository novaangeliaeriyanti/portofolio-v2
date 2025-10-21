export interface Service {
  title: string;
  desc: string;
  icon: 'Code' | 'LayoutDashboard' | 'Star';
  image: string;
}

const services: Service[] = [
  {
    title: 'Web Development',
    desc: 'Building responsive and high-performing websites tailored for your business.',
    icon: 'Code',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'UI/UX Design',
    desc: 'Creating intuitive and beautiful user experiences for web and mobile apps.',
    icon: 'LayoutDashboard',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Brand Strategy',
    desc: 'Helping brands stand out with clear identity and impactful storytelling.',
    icon: 'Star',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
];

export default services;
