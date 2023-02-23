/* eslint-disable import/no-extraneous-dependencies */
import { faker } from '@faker-js/faker';

import { getRandomNumber } from '@utils';

import { TabItem, Item, Type } from './types';

export const getListItemsForTab = (size: number) => {
  const list: Item[] = [];

  Array.from({ length: size }, () =>
    list.push({
      id: faker.datatype.number({ min: 1, max: 10000 }),
      name: faker.company.name(),
      price: faker.datatype.number({ min: 1, max: 1000 }),
      behavior: faker.lorem.word(9),
      selected: false,
    })
  );

  return list;
};

export const getListTabs = () => {
  const list: TabItem[] = [];

  Array.from({ length: 8 }, () =>
    list.push({
      id: getRandomNumber({ min: 0, max: 20000 }),
      value: `Nome ${getRandomNumber({ min: 0, max: 20000 })}`,
      selected: list.length === 0,
      listItems: getListItemsForTab(20),
    })
  );

  return list;
};

export const getListButtonsTypes = () => {
  const list: Type[] = [
    {
      id: faker.datatype.number({ min: 1, max: 1000 }),
      value: 'Todos',
      selected: true,
    },
    {
      id: faker.datatype.number({ min: 1, max: 1000 }),
      value: 'View',
      selected: false,
    },
    {
      id: faker.datatype.number({ min: 1, max: 1000 }),
      value: 'Click',
      selected: false,
    },
    {
      id: faker.datatype.number({ min: 1, max: 1000 }),
      value: 'Hibrido',
      selected: false,
    },
  ];
  return list;
};
