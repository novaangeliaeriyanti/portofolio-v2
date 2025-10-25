export interface FooterLink {
  title: string;
  href: string;
}

export const footerSections = [
  {
    heading: 'Head Office',
    content: [
      'Road, California, US',
      'Mon – Fri: 08:00 – 17:00',
      'info@ladybug.com',
      '+1 000 123 XXX XXX',
    ],
  },
  {
    heading: 'Quick Links',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Our Services', href: '/services' },
      { title: 'Projects', href: '/projects' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Our Services',
    links: [
      { title: 'Industrial Maintenance', href: '/services/maintenance' },
      { title: 'Construction Management', href: '/services/construction' },
      { title: 'Energy Solutions', href: '/services/energy' },
      { title: 'Fabrication & Welding', href: '/services/fabrication' },
    ],
  },
  {
    heading: 'Follow Us',
    socials: [
      { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
      { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
      { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
      { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    ],
  },
];
