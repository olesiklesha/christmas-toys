import styled from 'styled-components';
import bgImage from '../assets/images/main-bg.jpg';

export const MainContainer = styled.main`
  background-size: cover;
  background-attachment: fixed;
  background-image: url(${bgImage});
  min-height: calc(100% - 70px);
  display: flex;
  flex-direction: column;
`;

export const Container = styled.section`
  width: 100%;
  padding: 0 10px;
  min-height: 100%;
  flex-grow: 1;
`;

export const BlurContainer = styled(Container)`
  backdrop-filter: ${(p) => p.theme.filter};
`;