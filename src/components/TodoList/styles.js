import styled from "styled-components";

export const Container = styled.section`
  border-radius: 1rem;
  padding: 40px 60px;
  filter: drop-shadow(0px 24px 64px rgba(0, 0, 0, 0.06));

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  background: #fff;
  font-size: 16px;

  & input {
    flex: 1;
    background: #ebebeb;
    border: 0;
    padding: 12px 24px;
    border-radius: 8px;
    border: 0;

    &::placeholder {
      color: #a09cb1;
    }

    &:focus {
      box-shadow: 0 0 0 3px lightgray;
      outline: none;
    }
  }

  & button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: blue;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 14px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.95);
    }
  }
`;

export const ListItem = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  padding: 1rem 0;
`;
