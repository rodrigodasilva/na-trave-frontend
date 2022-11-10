import styled from "styled-components";

export const MatchList = styled.ul`
  padding: 0;
  margin-top: 52px;

  > li {
    list-style: none;
  }

  > li:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const MatchMessageInfo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--gray-500);
  text-align: center;
`;
