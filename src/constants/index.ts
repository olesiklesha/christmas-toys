export enum AppRoutes {
  MAIN = '/',
  TOYS = '/toys',
  TREE = '/tree',
}

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

export const FILTERS_INIT_STATE = Object.freeze({
  values: { shapes: [], colors: [], sizes: [], favourite: false },
  copiesRange: { min: MIN_COUNT, max: MAX_COUNT },
  yearsRange: { min: MIN_YEAR, max: MAX_YEAR },
  sorting: {
    search: '',
    sort: 'str-max',
  },
});
