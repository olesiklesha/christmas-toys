import styled from 'styled-components';
import searchIcon from '../../assets/icons/search.svg';
import arrow from '../../assets/icons/down.svg';
import ball from '../../assets/icons/ball-3.svg';

export const SearchInput = styled.input.attrs({ type: 'search' })`
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
  padding: 5px 15px;
  outline: 0;
  border-radius: 20px;
  border: 2px solid ${(p) => p.theme.colors.secondary};
  color: ${(p) => p.theme.colors.text};
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
    color: ${(p) => p.theme.colors.text};
    padding-left: 2px;
    font-size: ${(p) => p.theme.fontSizes.s};
  }

  &::-webkit-search-cancel-button {
    color: ${(p) => p.theme.colors.text};
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
  color: ${(p) => p.theme.colors.text};
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

export const BtnContainer = styled.div`
  display: flex;
  width: 360px;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 170px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(p) => p.theme.colors.transpBg};
  border: 2px solid ${(p) => p.theme.colors.secondary};
  color: ${(p) => p.theme.colors.text};
  font-size: ${(p) => p.theme.fontSizes.s};
  backdrop-filter: ${(p) => p.theme.filter};
  cursor: pointer;
`;

export const Quantity = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 60px;
  background-image: url(${ball});
  background-size: 50px 54px;
  background-repeat: no-repeat;
`;
