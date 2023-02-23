export interface SelectBoxItem {
  id: number;
  title: string;
  subTitle?: string;
  selected: boolean;
  tooltip?: string;
  clicked?: boolean;
}

export interface SelectBoxItemProps {
  item: SelectBoxItem;
  onItemPressed: (value: SelectBoxItem) => void;
  className?: string;
  classNameLabel?: string;
}

export interface SelectBoxProps {
  data: SelectBoxItem[];
  onItemPressed: (item: SelectBoxItem) => void;
  className?: string;
  classNameBoxItem?: string;
}
