export type Photo = {
  id: string;
  slug: string;
  alternative_slugs: Record<string, string>;
  created_at: string;
  updated_at: string;
  promoted_at: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string | null;
  alt_description: string;
  breadcrumbs: string[];
  urls: Record<string, string>;
  links: Record<string, string>;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: string[];
  sponsorship: {
    impression_urls: string[];
    tagline: string;
    tagline_url: string;
    sponsor: {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      last_name: string;
      twitter_username: string;
      portfolio_url: string;
      bio: string;
      location: string | null;
      links: Record<string, string>;
      profile_image: Record<string, string>;
      instagram_username: string;
      total_collections: null;
      total_likes: null;
      total_photos: number;
      total_promoted_photos: number;
      total_illustrations: number;
      total_promoted_illustrations: number;
      accepted_tos: boolean;
      for_hire: boolean;
      social: {
        instagram_username: string;
        portfolio_url: string;
        twitter_username: string;
        paypal_email: string | null;
      };
    };
  };
  topic_submissions: {};
  asset_type: string;
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string | null;
    links: Record<string, string>;
    profile_image: Record<string, string>;
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    total_promoted_photos: number;
    total_illustrations: number;
    total_promoted_illustrations: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string;
      portfolio_url: string;
      twitter_username: string;
      paypal_email: string | null;
    };
  };
};
