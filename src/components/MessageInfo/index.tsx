import * as S from "./styles";

interface MessageInfoProps {
  children: React.ReactNode;
}

export const MessageInfo: React.FC<MessageInfoProps> = ({ children }) => {
  return <S.MatchMessageInfo>{children}</S.MatchMessageInfo>;
};
