export interface Gif {
  id: string;
  name: string;
  category: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  tags: string[];
}
