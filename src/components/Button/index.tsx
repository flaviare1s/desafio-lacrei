"use client";
import * as S from "./styles"

interface ButtonProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ href, title, children }) => {
  return (
    <S.StyledButton href={href} title={title}>
      {children}
    </S.StyledButton>
  );
};
