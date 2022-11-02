import * as ReactTabs from "@radix-ui/react-tabs";
import styled from "styled-components";

export const Trigger = styled(ReactTabs.Trigger)`
  font-size: 14px;
  line-height: 16px;
  color: var(--gray-500);
  background: #fff;
  border: none;
  position: relative;
  padding: 4px 8px;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--gray-200);
  }

  &[data-state="active"] {
    color: var(--primary);

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 6px;
      right: 6px;
      height: 2px;
      background: var(--primary);
    }
  }

  &:hover {
    color: var(--primary);
  }
`;
