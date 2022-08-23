import styled from 'styled-components';
import searchIcon from '../../assets/icons/search.svg';
import arrow from '../../assets/icons/down.svg';

export const SearchInput = styled.input.attrs({ type: 'search' })`
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
  padding: 5px 15px;
  outline: 0;
  border-radius: 20px;
  border: 2px solid ${(p) => p.theme.colors.secondary};
  color: #fff;
  background-color: ${(p) => p.theme.colors.transpBg};
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 330px center;
  backdrop-filter: ${(p) => p.theme.filter};
  background-image: url(${searchIcon});

  &:focus {
    background-image: none;
  }

  &::placeholder {
    color: #fff;
    padding-left: 2px;
    font-size: ${(p) => p.theme.fontSizes.s};
  }

  &::-webkit-search-cancel-button {
    color: #fff;
    -webkit-appearance: none;
    height: 22px;
    width: 22px;
    margin-left: 0.4em;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>");
    cursor: pointer;
  }
`;

export const Select = styled.select`
  width: 80%;
  height: 40px;
  margin-bottom: 100px;
  padding: 5px 15px;
  outline: 0;
  border-radius: 20px;
  border: 2px solid ${(p) => p.theme.colors.secondary};
  color: #fff;
  background-color: ${(p) => p.theme.colors.transpBg};
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 330px center;
  backdrop-filter: ${(p) => p.theme.filter};
  appearance: none;
  cursor: pointer;
  background-image: url(${arrow});
  font-size: ${(p) => p.theme.fontSizes.s};

  & > option {
    background-color: #183e42;
    border: none;
  }
`;
