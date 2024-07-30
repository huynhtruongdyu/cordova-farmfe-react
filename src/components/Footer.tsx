import styled from "styled-components";
import { FooterStyled } from "./styled/styled-component";

const Footer = () => {
  return <ContainerStyled>asdf</ContainerStyled>;
};

export default Footer;

//#region  styled
const ContainerStyled = styled(FooterStyled)`
  font-size: 0.75rem;
  height: 20px;

  border-top: ${(props) => props.theme.border};
`;
//#endregion
