import styled from "styled-components";

export const MatchCard = styled.div`
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
  }
`;

export const MatchHunch = styled.span`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const MatchFooter = styled.footer``;
