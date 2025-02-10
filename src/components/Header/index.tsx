'use client';
import Image from "next/image";
import * as S from "./styles";
import Navbar from "../Navbar";

export const Header: React.FC = () => {
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.LogoContainer>
          <Image src="/logo_lacrei.svg" alt="Logo da Lacrei Saúde" width={200} height={60} />
        </S.LogoContainer>
        <S.NavWrapper>
          <Navbar />
        </S.NavWrapper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};
