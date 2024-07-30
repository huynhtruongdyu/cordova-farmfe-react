import styled from "styled-components";

export const DivStyled = styled.div`
  color: ${(props) => props.theme.fgColor};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  line-height: ${(props) => props.theme.lineHeight};
`;

export const FooterStyled = styled.footer`
  color: ${(props) => props.theme.fgColor};
  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeight};
  line-height: ${(props) => props.theme.lineHeight};
`;
