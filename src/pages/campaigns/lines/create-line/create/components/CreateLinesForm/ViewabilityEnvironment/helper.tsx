export interface DeviceType {
  id: number;
  name: string;
  type: 'desktops' | 'tablets' | 'mobile' | 'ctv';
  image: string;
  selected: boolean;
}

export const listDeviceType: DeviceType[] = [
  {
    id: 0,
    name: 'Desktops',
    type: 'desktops',
    image: '/svg/icon_desktop.svg',
    selected: true,
  },
  {
    id: 1,
    name: 'Tablets',
    type: 'tablets',
    image: '/svg/icon_tablet.svg',
    selected: false,
  },
  {
    id: 2,
    name: 'Mobile',
    type: 'mobile',
    image: '/svg/icon_mobile.svg',
    selected: false,
  },
  {
    id: 3,
    name: 'CTV',
    type: 'ctv',
    image: '/svg/icon_ctv.svg',
    selected: false,
  },
];
