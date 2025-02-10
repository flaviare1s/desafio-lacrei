import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const LogoContainer = styled.div`
  width: 120px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .logo-mobile {
    display: none;
  }

  .logo-desktop {
    display: block;
  }

  @media (max-width: 768px) {
    .logo-mobile {
      display: block;
    }

    .logo-desktop {
      display: none; 
    }
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
