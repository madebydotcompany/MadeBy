export type StudioTheme = {
  accent: string;
  wash: string;
  ink: string;
};

export type Studio = {
  slug: string;
  name: string;
  owner: string;
  discipline: string;
  location: string;
  bio: string;
  avatar: string;
  hero: string;
  theme: StudioTheme;
  socials: { label: string; href: string }[];
  stats: { label: string; value: string }[];
  portfolio: { title: string; image: string; size: "tall" | "wide" | "square" }[];
  products: { slug?: string; name: string; price: string; image: string }[];
  collections: { name: string; note: string; image: string }[];
  journal: { title: string; date: string; image: string }[];
  videos: { title: string; duration: string; image: string }[];
  achievement: string;
  review: { quote: string; name: string; role: string };
  event: { title: string; date: string; place: string };
};
