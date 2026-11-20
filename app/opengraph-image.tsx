import {
  createSocialImage,
  imageAlt,
  imageContentType,
  imageSize,
} from "@/lib/social-image";

export const alt = imageAlt;
export const size = imageSize;
export const contentType = imageContentType;

const OpenGraphImage = () => createSocialImage();

export default OpenGraphImage;
