import styled from "styled-components";

export const HeaderWrapper = styled.header`
  align-items: center;
  background: var(--primary);
  color: var(--primary-contrast);
  display: flex;
  flex-direction: column;
  height: 88px;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 16px;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  img {
    width: 96px;
    height: 27px;
  }
`;
