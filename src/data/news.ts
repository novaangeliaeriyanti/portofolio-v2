import { Article } from '@/types/types';

export const articles: Article[] = [
  {
    id: 'article-1',
    title: 'Industrial solutions to speed up field progress',
    desc: 'Learn how our latest equipment and optimized workflow are improving efficiency across multiple construction sites. With advanced automation tools and improved material handling systems, teams can complete tasks faster and reduce downtime significantly. These innovations are designed to support high-pressure environments while maintaining safety and quality standards.',
    date: 'Oct 10, 2025',
    category: 'Construction',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
  },
  {
    id: 'article-2',
    title: 'A project to transform city infrastructure',
    desc: 'Our urban development initiative aims to modernize road and bridge systems for safer, smarter cities. This project includes the integration of advanced monitoring technologies, eco-friendly materials, and optimized traffic routes to reduce congestion. The transformation will support future growth and create more resilient infrastructure for millions of residents.',
    date: 'Oct 5, 2025',
    category: 'Infrastructure',
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg',
  },
  {
    id: 'article-3',
    title: 'New safety innovation for modern industrial sites',
    desc: 'Discover our new safety protocols and tools designed for heavy-duty industrial work environments. The updated guidelines focus on reducing on-site risks through real-time hazard detection, improved communication systems, and enhanced protective gear. These innovations help organizations maintain high productivity without compromising worker safety.',
    date: 'Sep 28, 2025',
    category: 'Safety',
    image: 'https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg',
  },
  {
    id: 'article-4',
    title: 'Sustainable materials shaping the future of construction',
    desc: 'As industries shift toward eco-conscious development, sustainable materials are becoming essential in modern construction. Our research highlights innovative alternatives such as recycled composites, low-emission concrete, and high-durability green polymers. These materials not only reduce environmental impact but also improve lifecycle performance, offering long-term value for both developers and communities.',
    date: 'Sep 15, 2025',
    category: 'Innovation',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  },
  {
    id: 'article-5',
    title: 'Industrial solutions to speed up field progress',
    desc: 'Learn how our latest equipment and optimized workflow are improving efficiency across multiple construction sites. With advanced automation tools and improved material handling systems, teams can complete tasks faster and reduce downtime significantly. These innovations are designed to support high-pressure environments while maintaining safety and quality standards.',
    date: 'Oct 10, 2025',
    category: 'Construction',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
  },
  {
    id: 'article-6',
    title: 'A project to transform city infrastructure',
    desc: 'Our urban development initiative aims to modernize road and bridge systems for safer, smarter cities. This project includes the integration of advanced monitoring technologies, eco-friendly materials, and optimized traffic routes to reduce congestion. The transformation will support future growth and create more resilient infrastructure for millions of residents.',
    date: 'Oct 5, 2025',
    category: 'Infrastructure',
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg',
  },
  {
    id: 'article-7',
    title: 'New safety innovation for modern industrial sites',
    desc: 'Discover our new safety protocols and tools designed for heavy-duty industrial work environments. The updated guidelines focus on reducing on-site risks through real-time hazard detection, improved communication systems, and enhanced protective gear. These innovations help organizations maintain high productivity without compromising worker safety.',
    date: 'Sep 28, 2025',
    category: 'Safety',
    image: 'https://images.pexels.com/photos/38070/pexels-photo-38070.jpeg',
  },
  {
    id: 'article-8',
    title: 'Sustainable materials shaping the future of construction',
    desc: 'As industries shift toward eco-conscious development, sustainable materials are becoming essential in modern construction. Our research highlights innovative alternatives such as recycled composites, low-emission concrete, and high-durability green polymers. These materials not only reduce environmental impact but also improve lifecycle performance, offering long-term value for both developers and communities.',
    date: 'Sep 15, 2025',
    category: 'Innovation',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  },
];

export const categories = [
  'Innovation',
  'Construction',
  'Safety',
  'Infrastructure',
];

export const blogDetail = {
  id: 'article-01',
  title: 'Industrial solutions to speed up field progress',
  date: 'Oct 10, 2025',
  category: 'Construction',
  image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
  author: {
    name: 'Alex Johnson',
    role: 'Engineering Manager',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  content: `
    <p>
      The construction industry is undergoing a major transformation driven by
      technology. From automated machinery to AI-powered project management,
      companies are achieving faster results and improved accuracy.
    </p>

    <p>
      Our latest industrial solutions focus on enhancing workflow efficiency,
      reducing downtime, and maintaining safety standards. These innovations
      include smart cranes, predictive maintenance systems, and improved
      material handling processes.
    </p>

    <figure>
      <img
        src="https://images.pexels.com/photos/3802236/pexels-photo-3802236.jpeg"
        alt="Construction team using smart machinery"
        style="border-radius: 16px; margin: 20px 0;"
      />
      <figcaption style="font-size: 14px; color: #666; text-align: center;">
        Construction team operating automated equipment on site
      </figcaption>
    </figure>

    <blockquote style="border-left: 4px solid #ff9100; padding-left: 16px; font-style: italic;">
      "With automation and data integration, we're not just building faster —
      we're building smarter."
    </blockquote>

    <p>
      Looking ahead, the future of construction will merge robotics, sustainable
      materials, and real-time analytics to push efficiency and safety to new
      levels. These advancements promise not only cost savings but also a
      reduced environmental footprint.
    </p>
  `,
  relatedPosts: [
    {
      title: 'Smart Construction: The Future of Building',
      image: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg',
      date: 'Sep 22, 2025',
    },
    {
      title: 'How AI Is Revolutionizing Material Management',
      image:
        'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      date: 'Aug 30, 2025',
    },
    {
      title: 'Improving Site Safety with Automation',
      image:
        'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg',
      date: 'Jul 12, 2025',
    },
  ],
};
