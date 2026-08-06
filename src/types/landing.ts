export interface NavItem {
  id: number;
  label: string;
  href: string;
}

export interface LinkAction {
  label: string;
  href: string;
}

export interface NavbarProps {
  logo: {
    text: string;
    image: string;
    alt: string;
    href: string;
  };
  navigation: NavItem[];
  actions: {
    login: LinkAction;
    signup: LinkAction;
  };
}

export interface HeroProps {
  title: {
    line1: string;
    line2: string;
  };
  description: string;
  button: LinkAction;
  image: string;
  slider: {
    active: number;
    total: number;
  };
}

export interface ClientLogo {
  id: number;
  image: string;
  alt: string;
}

export interface ClientsProps {
  title: string;
  description: string;
  logos: ClientLogo[];
}

export interface CommunityCard {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
}

export interface CommunityProps {
  title: string;
  description: string;
  cards: CommunityCard[];
}

export interface FeatureProps {
  image: string;
  title: string;
  description: string;
  button: LinkAction;
}

export interface StatisticItem {
  id: number;
  image: string;
  alt: string;
  value: string;
  label: string;
}

export interface StatisticsProps {
  title: {
    line1: string;
    line2: string;
  };
  description: string;
  items: StatisticItem[];
}

export interface TestimonialProps {
  image: string;
  description: string;
  author: {
    name: string;
    company: string;
  };
  logos: ClientLogo[];
  link: LinkAction;
}

export interface BlogCard {
  id: number;
  image: string;
  title: string;
  button: LinkAction;
}

export interface BlogProps {
  title: string;
  description: string;
  cards: BlogCard[];
}

export interface CtaProps {
  title: string;
  button: LinkAction;
}

export interface FooterProps {
  logo: {
    image: string;
    alt: string;
    text: string;
  };

  copyright: string[];

  socials: {
    id: number;
    icon: string;
    href: string;
  }[];

  company: {
    id: number;
    label: string;
    href: string;
  }[];

  support: {
    id: number;
    label: string;
    href: string;
  }[];

  newsletter: {
    title: string;
    placeholder: string;
    buttonIcon?: string;
  };
}

export interface LandingPageData {
  navbar: NavbarProps;
  hero: HeroProps;
  clients: ClientsProps;
  community: CommunityProps;
  featureOne: FeatureProps;
  statistics: StatisticsProps;
  featureTwo: FeatureProps;
  testimonial: TestimonialProps;
  blog: BlogProps;
  cta: CtaProps;
  footer: FooterProps;
}
