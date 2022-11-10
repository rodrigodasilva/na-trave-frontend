import styled from "styled-components";

export const MatchPagination = styled.nav`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    color: var(--primary);
  }
`;

export const MatchPaginationLoadingWrapper = styled.div`
  position: absolute;
  width: 100%;
  background: #f1f5f973;
  border-radius: var(--rounded-md);
`;
