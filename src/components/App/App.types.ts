export interface UnsplashPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  description: string | null;
  alt_description: string | null;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  user: {
    id: string;
    username: string;
    name: string;
    portfolio_url: string | null;
    bio: string | null;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
    };
  };
}

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
}

export interface SearchBarProps {
  setQuery: (query: string) => void;
}

export interface FormValues {
  query: string;
}

export interface LoadMoreBtnProps {
  setPage: (update: (prevPage: number) => number) => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: UnsplashPhoto | null;
}

export interface ImageGalleryProps {
  items: UnsplashPhoto[];
  onImageClick: (image: UnsplashPhoto) => void;
}

export interface ImageCardProps {
  item: UnsplashPhoto;
  onImageClick: (image: UnsplashPhoto) => void;
}
