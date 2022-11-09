import styled from "styled-components";

export const LoginHeader = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 32px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
`;

export const LoginFormHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const LoginFormActions = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
`;
