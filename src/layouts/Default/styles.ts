import styled from "styled-components";

export const DefaultLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

export const DefaultLayoutContent = styled.main`
  background-color: var(--primary-ghost);
  height: 100%;
  padding: 32px 12px;
  overflow-y: auto;
`;

export const DefaultLayoutChildren = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;
