import styled from "styled-components";

export const CurrentDate = styled.nav`
  display: flex;
  gap: 24px;
  justify-content: center;

  svg {
    color: var(--primary);
  }
`;

export const MatchList = styled.ul`
  padding: 0;
  margin-top: 52px;

  li:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const MatchItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.5px solid var(--gray-400);
  border-radius: var(--rounded-md);
  padding: 24px 24px 16px;
`;

export const MatchHeader = styled.header`
  text-align: center;
  margin-bottom: 12px;
`;

export const MatchBody = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  max-width: 480px;

  svg {
    color: var(--gray-400);
    margin: 0 auto;
  }
`;

export const MatchFooter = styled.footer``;
