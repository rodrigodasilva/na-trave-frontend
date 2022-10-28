import styled from "styled-components";

export const SpinnerWrapper = styled.span`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;

  span {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    margin: 8px;
    border: 4px solid #fff;
    border-radius: 50%;
    animation: rotateSpinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--primary) transparent transparent transparent;
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
