import { FiltersSliceState } from '../store/reducers/filters-slice';
import { IToy } from '../models';
import toys from '../data/toys-data.json';
import { Range } from 'react-input-range';

const data = toys as IToy[];

export const sortToys = (param: FiltersSliceState) => {
  const { sorting, values, yearsRange, copiesRange } = param;
  const { sort, search } = sorting;
  const { favourite, shapes, sizes, colors } = values;

  const checkRange = (range: Range, target: string) => {
    const { min, max } = range;
    return Number(target) >= min && Number(target) <= max;
  };

  const checkName = (name: string, target: string) => {
    return name.toLocaleLowerCase().indexOf(target) !== -1;
  };

  const result = data.filter(
    (el) =>
      (shapes.length > 0 ? shapes.includes(el.shape) : true) &&
      (colors.length > 0 ? colors.includes(el.color) : true) &&
      (sizes.length > 0 ? sizes.includes(el.size) : true) &&
      (favourite ? el.favorite : true) &&
      checkRange(copiesRange, el.count) &&
      checkRange(yearsRange, el.year) &&
      (search ? checkName(el.name, search) : true)
  );

  switch (sort) {
    case 'str-max':
      result.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case 'str-min':
      result.sort((a, b) => (a.name > b.name ? -1 : 1));
      break;
    case 'new':
      result.sort((first, second) => Number(second.year) - Number(first.year));
      break;
    case 'old':
      result.sort((first, second) => Number(first.year) - Number(second.year));
      break;

    default:
      break;
  }

  return result;
};
