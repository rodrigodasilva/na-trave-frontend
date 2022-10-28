import styled from "styled-components";

export const TypographyWrapper = styled.div.attrs<{ as: string }>(props => ({
  as: props.as,
}))`
  &.text-xs {
    font-size: var(--text-xs); /* 12px */
    line-height: 1rem; /* 16px */
  }

  &.text-sm {
    font-size: var(--text-sm); /* 14px */
    line-height: 1.25rem; /* 20px */
  }

  &.text-md {
    font-size: var(--text-md); /* 16px */
    line-height: 1.5rem; /* 24px */
  }

  &.text-lg {
    font-size: var(--text-lg); /* 18px */
    line-height: 1.75rem; /* 28px */
  }

  &.text-xl {
    font-size: var(--text-xl); /* 20px */
    line-height: 1.75rem; /* 28px */
  }

  &.text-2xl {
    font-size: var(--text-2xl); /* 24px */
    line-height: 2rem; /* 32px */
  }

  &.text-3xl {
    font-size: var(--text-3xl); /* 30px */
    line-height: 2.25rem; /* 36px */
  }

  &.text-4xl {
    font-size: var(--text-4xl); /* 36px */
    line-height: 2.5rem; /* 40px */
  }

  &.text-5xl {
    font-size: var(--text-5xl); /* 48px */
    line-height: 1;
  }

  &.text-6xl {
    font-size: var(--text-6xl); /* 60px */
    line-height: 1;
  }

  &.text-7xl {
    font-size: var(--text-7xl); /* 72px */
    line-height: 1;
  }

  &.text-8xl {
    font-size: var(--text-8xl); /* 96px */
    line-height: 1;
  }

  &.text-9xl {
    font-size: var(--text-9xl); /* 128px */
    line-height: 1;
  }

  &.font-bold {
    font-weight: 700;
  }
`;
