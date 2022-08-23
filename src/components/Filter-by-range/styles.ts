import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Output = styled.output`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 40px;
  border: 1px solid #278d9f;
  border-radius: 20px;
  backdrop-filter: ${(p) => p.theme.filter};
`;
