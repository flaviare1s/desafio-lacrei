import styled from "styled-components";

export const StyledButton = styled.a`
  display: inline-block;
  width: 100px;
  padding: 12px 0;
  margin: 10px;
  background-image: linear-gradient(180deg, #018762 0%, #014687 100%);
  color: white;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    opacity: 90%;
  }

  span {
    font-weight: bold;
  }

  @media (max-width: 500px) {
    width: 70px;
  }
`;
