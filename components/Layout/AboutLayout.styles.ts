import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  width: 400px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  font-size: 1.125rem;
  line-height: 1.82813rem;

  & p {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  & a {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.ramonakRed};
  }

  & p img {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`;
