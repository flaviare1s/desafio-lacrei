import styled from "styled-components";

export const MainContainer = styled.main`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  color: #333;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    font-size: 1.125rem;
    color: #555;
  }

  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
