import styled from "styled-components";

export const SpinnerWrapper = styled.span`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner__item {
    box-sizing: border-box;
    display: block;
    position: absolute;
    margin: 8px;
    border-radius: 50%;
    animation: rotateSpinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  }

  &.spinner--sm .spinner__item {
    width: 20px;
    height: 20px;
    border: 3px solid #fff;
  }

  &.spinner--md .spinner__item {
    border: 4px solid #fff;
    width: 32px;
    height: 32px;
  }

  & span:nth-child(1) {
    animation-delay: -0.45s;
  }

  & span:nth-child(2) {
    animation-delay: -0.3s;
  }

  & span:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
