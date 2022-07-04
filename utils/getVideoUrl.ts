import { Gif } from "../types/Gif";

const getVideoUrl = (gif: Gif) => {
  return gif.thumbnail.url.slice(0, -3) + "mp4";
};

export default getVideoUrl;
