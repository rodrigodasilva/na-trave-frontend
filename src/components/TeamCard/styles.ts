import styled from "styled-components";

export const TeamCardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 12px;

  .team-card__flag {
    width: 56px;
    height: 56px;
    display: flex;
    border-radius: var(--rounded-md);
    background: var(--gray-200);
  }

  @media (min-width: 640px) {
    flex-direction: row;

    &.team-card--away {
      flex-direction: row-reverse;
    }
  }
`;
