import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import styled from "styled-components";
import { useWorkspaceCtx } from "../features/app/providers";
import { DivStyled } from "./styled/styled-component";

const Header = () => {
  console.log("Header");
  const { openSidebar, toggleSidebar } = useWorkspaceCtx();
  return (
    <ContainerStyled>
      <HeaderItem onClick={toggleSidebar}>
        {openSidebar ? (
          <MdOutlineKeyboardDoubleArrowLeft />
        ) : (
          <MdOutlineKeyboardDoubleArrowRight />
        )}
      </HeaderItem>
    </ContainerStyled>
  );
};

export default Header;

//#region styled
const ContainerStyled = styled(DivStyled)`
  flex: 0 0 35px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderItem = styled(DivStyled)`
  height: 100%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

//#endregion
