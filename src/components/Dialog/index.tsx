import * as DialogPrimitive from "@radix-ui/react-dialog";

import { ReactComponent as IconX } from "@/assets/icons/x.svg";

import * as S from "./styles";

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children, ...props }: ContentProps) => {
  return (
    <DialogPrimitive.Portal>
      <S.Overlay />
      <S.Content {...props}>{children}</S.Content>
    </DialogPrimitive.Portal>
  );
};

const Close = () => (
  <DialogPrimitive.Close asChild>
    <S.CloseButton>
      <IconX />
    </S.CloseButton>
  </DialogPrimitive.Close>
);

export const Root = DialogPrimitive.Root;
export const Trigger = DialogPrimitive.Trigger;
export { Close, Content };
export { Body, Footer, Header, Title } from "./styles";
