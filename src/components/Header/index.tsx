"use client";
import Image from "next/image";
import * as S from "./styles";
import Navbar from "../Navbar";

export const Header: React.FC = () => {
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.LogoContainer>
          <Image
            src="/logo_lacrei_mobile.svg"
            alt="Logo da Lacrei Saúde - Mobile"
            width={120}
            height={60}
            className="logo-mobile"
          />
          <Image
            src="/logo_lacrei.svg"
            alt="Logo da Lacrei Saúde - Desktop"
            width={200}
            height={60}
            className="logo-desktop"
          />
        </S.LogoContainer>
        <S.NavWrapper>
          <Navbar />
        </S.NavWrapper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};
