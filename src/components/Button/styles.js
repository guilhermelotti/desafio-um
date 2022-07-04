import styled from "styled-components";

export const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: blue;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 5px;
  padding: 8px 8px;
  text-decoration: none;
  letter-spacing: 1px;

  &:focus {
    box-shadow: 0 0 0 3px lightgray;
  }
`;
