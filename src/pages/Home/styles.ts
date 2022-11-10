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
