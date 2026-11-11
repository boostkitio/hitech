import { IKImage, IKContext, IKUpload } from 'imagekitio-react';

const imagekitConfig = {
  urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
  publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
  authenticationEndpoint: import.meta.env.VITE_IMAGEKIT_AUTH_ENDPOINT,
};

export { IKImage, IKContext, IKUpload, imagekitConfig }; 