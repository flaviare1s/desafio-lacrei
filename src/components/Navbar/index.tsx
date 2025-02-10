import * as S from "./styles";
import Link from "next/link";

export default function Navbar() {
  return (
    <S.NavList>
      <S.NavItem>
        <Link href="/">
          <S.StyledLink>Home</S.StyledLink>
        </Link>
      </S.NavItem>
      <S.NavItem>
        <Link href="/marsha">
          <S.StyledLink>Marsha</S.StyledLink>
        </Link>
      </S.NavItem>
    </S.NavList>
  );
}
