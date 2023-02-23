export interface Item {
  id: number;
  name: string;
  price: number;
  behavior: string;
  selected: boolean;
}

export interface TabItem {
  id: number;
  value: string;
  selected: boolean;
  listItems: Item[];
}

export interface Type {
  id: number;
  value: string;
  selected: boolean;
}
