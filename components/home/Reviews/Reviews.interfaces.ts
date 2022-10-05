import { StaticImageData } from 'next/image';

export interface Review {
    key: number;
    image: StaticImageData;
    imageAlt: string;
    name: string;
    content: string;
};
