export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterSection {
  heading: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    heading: 'Company',
    links: [
      { title: 'About Us', href: '/about' },
      { title: 'Contact', href: '/contact' },
      { title: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'Follow Us',
    links: [
      { title: 'Instagram', href: '' },
      { title: 'LinkedIn', href: '' },
      { title: 'Twitter (X)', href: '' },
    ],
  },
];
