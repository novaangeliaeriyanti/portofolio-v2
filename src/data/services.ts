export interface Service {
  title: string;
  desc: string;
  icon: 'Code' | 'LayoutDashboard' | 'Star';
  image: string;
  category: string;
  tools?: string[];
  features?: string[];
  ctaLabel?: string;
  ctaLink?: string;
  testimonial?: {
    quote: string;
    author: string;
    company?: string;
  };
}

export interface ServicesSection {
  title: string;
  desc: string;
  items: Service[];
}

const services: ServicesSection = {
  title: 'Our Services',
  desc: 'We provide a range of creative and technical solutions to help your business grow and succeed in the digital world.',
  items: [
    {
      title: 'Web Development',
      desc: 'Building responsive and high-performing websites tailored for your business.',
      icon: 'Code',
      image:
        'https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
      category: 'development',
      tools: ['Next.js', 'Tailwind', 'Node.js'],
      features: [
        'Custom website & web app development',
        'SEO optimization & analytics',
        'Fast, scalable, and secure architecture',
      ],
      ctaLabel: 'View Projects',
      ctaLink: '/portfolio',
    },
    {
      title: 'UI/UX Design',
      desc: 'Creating intuitive and beautiful user experiences for web and mobile apps.',
      icon: 'LayoutDashboard',
      image:
        'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
      category: 'design',
      tools: ['Figma', 'Framer', 'Adobe XD'],
      features: [
        'Wireframes & prototyping',
        'User flow analysis',
        'Modern interface design',
      ],
    },
    {
      title: 'Brand Strategy',
      desc: 'Helping brands stand out with clear identity and impactful storytelling.',
      icon: 'Star',
      image:
        'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
      category: 'strategy',
      features: [
        'Brand identity & guidelines',
        'Market positioning',
        'Social media strategy',
      ],
      testimonial: {
        quote: 'They helped us redefine our brand voice and visual identity.',
        author: 'Jane Doe',
        company: 'Creative Co.',
      },
    },
  ],
};

export default services;
