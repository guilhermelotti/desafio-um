import styled from "styled-components";

export const Title = styled.p`
  font-size: 2rem;
  text-decoration: ${({ isComplete }) => isComplete && "line-through"};
`;

export const UpdateTodo = styled.span`
  display: flex;
  width: 100%;
`;

export const UpdateInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 2px solid blue;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
