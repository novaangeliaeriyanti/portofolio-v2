export interface CardData {
  title: string;
  desc: string;
  image: string;
}

export interface Article {
  id: string;
  title: string;
  desc: string;
  date: string;
  category: string;
  image: string;
}

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type HeroSlide = {
  badgeText?: string;
  title: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  backgroundImageUrl: string;
};

export type HeroBannerProps = {
  slides: HeroSlide[];
  autoPlayMs?: number;
};

export interface SidebarBlogProps {
  categories: string[];
  recentPosts: { title: string; slug?: string }[];
}
