export interface AdType {
  id: number;
  name: string;
  type: 'image' | 'video' | 'native' | 'sound';
  image: string;
  selected: boolean;
}

export const listTypeAd: AdType[] = [
  {
    id: 0,
    name: 'Image',
    type: 'image',
    image: '/svg/icon_image.svg',
    selected: true,
  },
  {
    id: 1,
    name: 'Vídeo',
    type: 'video',
    image: '/svg/icon_video.svg',
    selected: false,
  },
  {
    id: 2,
    name: 'Native',
    type: 'native',
    image: '/svg/icon_native.svg',
    selected: false,
  },
  {
    id: 3,
    name: 'Áudio',
    type: 'sound',
    image: '/svg/icon_audio.svg',
    selected: false,
  },
];
