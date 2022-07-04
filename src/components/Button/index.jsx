import * as S from "./styles";

export function Button({ children, onClick, ...props }) {
  return (
    <S.Wrapper onClick={onClick} {...props}>
      {children}
    </S.Wrapper>
  );
}
