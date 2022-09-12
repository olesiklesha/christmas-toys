import { ITreeSettings } from '../store/reducers/tree-slice';

export enum AppRoutes {
  MAIN = '/',
  TOYS = '/toys',
  TREE = '/tree',
}

export enum GARLAND_COLOR {
  MULTI = 'multicolor',
  RED = 'red',
  BLUE = 'blue',
  YELLOW = 'yellow',
  GREEN = 'green',
}

export const COLORS_ARR = [
  GARLAND_COLOR.MULTI,
  GARLAND_COLOR.BLUE,
  GARLAND_COLOR.RED,
  GARLAND_COLOR.GREEN,
  GARLAND_COLOR.YELLOW,
];

export const MIN_YEAR = 1940;

export const MAX_YEAR = 2020;

export const MIN_COUNT = 1;

export const MAX_COUNT = 12;

export const MAX_QUANTITY = 20;

export const SHAPES = ['ball', 'bell', 'cone', 'snowflake', 'figure'];

export const COLORS = ['white', 'yellow', 'red', 'blue', 'green'];

export const SIZES = ['big', 'medium', 'small'];

export const TREE_ARR = [1, 2, 3, 4, 5, 6];

export const BG_ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const SELECTED_LS = 'ct_ls_st';

export const FILTERS_LS = 'ct_ls_f';

export const TREE_LS = 'ct_ls_t';

export const FILTERS_INIT_STATE = Object.freeze({
  values: { shapes: [], colors: [], sizes: [], favourite: false },
  copiesRange: { min: MIN_COUNT, max: MAX_COUNT },
  yearsRange: { min: MIN_YEAR, max: MAX_YEAR },
  sorting: {
    search: '',
    sort: 'str-max',
  },
});

export const TREE_SET_INIT_STATE = Object.freeze<ITreeSettings>({
  tree: 1,
  bg: 1,
  garland: {
    isOn: false,
    color: GARLAND_COLOR.MULTI,
  },
  music: false,
  snow: false,
});

export const GARLAND = {
  line1: new Array(5).fill('a'),
  line2: new Array(7).fill('b'),
  line3: new Array(8).fill('c'),
  line4: new Array(11).fill('d'),
  line5: new Array(18).fill('f'),
  line6: new Array(21).fill('g'),
  line7: new Array(27).fill('h'),
  line8: new Array(29).fill('e'),
};
