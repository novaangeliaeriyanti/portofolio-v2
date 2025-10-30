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
