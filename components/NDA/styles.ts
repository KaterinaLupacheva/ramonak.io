import styled from "styled-components";

export const NDA = styled.div`
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  /* height: 8rem;
  width: 20rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  border: 1px solid ${(props) => props.theme.colors.text};
`;
