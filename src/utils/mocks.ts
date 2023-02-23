// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { Advertiser } from '@model/Advertiser';
import { Carrier } from '@model/Carrier';
import { DeviceModel } from '@model/DeviceModel';
import { InsertionOrder } from '@model/InsertionOrder';
import { Line } from '@model/Line';
import { OperationalSystem } from '@model/OperationalSystem';
import { Pixel } from '@model/Pixel';
import { Segment } from '@model/Segment';

export function createListAdvertiser(size = 10): Advertiser[] {
  const list: Advertiser[] = [];

  Array.from({ length: size }, () =>
    list.push({
      id: faker.datatype.number({ min: 1, max: 100 }).toString(),
      name: faker.company.name(),
    })
  );

  return list;
}

export function createListInsertionOrder(size = 10): InsertionOrder[] {
  const list: InsertionOrder[] = [];

  Array.from({ length: size }, () =>
    list.push({
      id: faker.datatype.number({ min: 1, max: 100 }).toString(),
      name: faker.name.firstName(),
      selected: false,
    })
  );

  return list;
}

export function createListPixel(size = 10): Pixel[] {
  const list: Pixel[] = [];

  Array.from({ length: size }, () =>
    list.push({
      id: faker.datatype.uuid().substring(0, 8),
      name: faker.name.firstName(),
      type: faker.animal.bird(),
      selected: false,
    })
  );

  return list;
}

export function createListOperationalSystem(size = 10): OperationalSystem[] {
  const list: OperationalSystem[] = [];

  Array.from({ length: size }, () =>
    list.push({
      id: faker.datatype.number({ min: 1, max: 100 }).toString(),
      name: faker.company.name(),
    })
  );

  return list;
}

export function createListDeviceModels(size = 10): DeviceModel[] {
  const list: DeviceModel[] = [];

  Array.from({ length: size }, () =>
    list.push({
      id: faker.datatype.number({ min: 1, max: 100 }).toString(),
      model: faker.company.name(),
      make: faker.company.companySuffix(),
    })
  );

  return list;
}

export function createListCarriers(size = 10): Carrier[] {
  const list: Carrier[] = [];

  Array.from({ length: size }, () =>
    list.push({
      id: faker.datatype.number({ min: 1, max: 100 }).toString(),
      country: faker.address.country(),
      carrier: faker.company.name(),
    })
  );

  return list;
}

export function createListSegments(size = 10): Segment[] {
  const list: Segment[] = [];

  Array.from({ length: size }, () =>
    list.push({
      id: faker.datatype.number({ min: 1, max: 100 }).toString(),
      name: faker.company.name(),
      usersNumber: faker.datatype.number({ min: 1, max: 100 }).toString(),
    })
  );

  return list;
}

export function createListLine(size = 10): Line[] {
  const list: Line[] = Array.from(Array(size).keys()).map((key) => ({
    id: String(key),
    name: faker.name.firstName(),
  }));

  return list;
}
