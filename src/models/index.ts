export interface IToy {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

export interface IValueFilters {
  shapes: string[];
  colors: string[];
  sizes: string[];
  favourite: boolean;
}

export interface ISortFilters {
  search: string;
  sort: string;
}

export interface ISnowflake {
  positionX: number;
  positionY: number;
  width: number;
  height: number;
  offsetY: number;
  offsetX: number;
  fill: string;
}
