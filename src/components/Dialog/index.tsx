import * as DialogPrimitive from "@radix-ui/react-dialog";

import { ReactComponent as IconX } from "@/assets/icons/x.svg";

import * as S from "./styles";

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children, ...props }: ContentProps) => {
  return (
    <DialogPrimitive.Portal>
      <S.StyledOverlay />
      <S.StyledContent {...props}>{children}</S.StyledContent>
    </DialogPrimitive.Portal>
  );
};

const Close = () => (
  <DialogPrimitive.Close asChild>
    <S.StyledCloseButton>
      <IconX />
    </S.StyledCloseButton>
  </DialogPrimitive.Close>
);

export const Root = DialogPrimitive.Root;
export const Trigger = DialogPrimitive.Trigger;
export { Close, Content };
export const Title = S.StyledTitle;
