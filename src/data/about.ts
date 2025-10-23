export interface Timeline {
  year: string;
  event: string;
}

export interface VisionMission {
  vision: string;
  mission: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export const about = {
  title: 'About Our Company',
  desc: 'With over 5 years of experience in the industry, LadybugCompany delivers high-quality web and mobile solutions for clients worldwide. Our mission is to empower businesses through innovation, design, and  technology.',
};

export const counters = [
  { label: 'Years of Experience', value: 5 },
  { label: 'Projects Completed', value: 120 },
  { label: 'Clients Served', value: 45 },
];

export const timeline: Timeline[] = [
  { year: '2019', event: 'Company founded with a small but passionate team.' },
  { year: '2021', event: 'Expanded into UI/UX and mobile app development.' },
  { year: '2023', event: 'Served over 50 clients worldwide.' },
];

export const visionMission: VisionMission = {
  vision:
    'To become a leading creative digital agency that transforms ideas into impactful digital experiences across the globe.',
  mission:
    'To help businesses grow through design, innovation, and technology—empowering brands to connect with their audience in meaningful ways.',
};

export const team: TeamMember[] = [
  {
    name: 'George Smith',
    role: 'Founder & CEO',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    bio: 'George leads the vision and direction of the company, ensuring creativity and innovation in every project.',
  },
  {
    name: 'Taylor Bibby',
    role: 'UI/UX Designer',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    bio: 'Taylor creates human-centered designs that balance usability and aesthetics beautifully.',
  },
  {
    name: 'Alexander Brown',
    role: 'Frontend Engineer',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=600&q=80',
    bio: 'Alex ensures every interface is fast, responsive, and pixel-perfect across devices.',
  },
];
