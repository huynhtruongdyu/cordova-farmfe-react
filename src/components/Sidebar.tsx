import styled from "styled-components";
import { useWorkspaceCtx } from "../features/app/providers";
import { DivStyled } from "./styled/styled-component";

const Sidebar = () => {
  console.log("Sidebar");
  const { openSidebar } = useWorkspaceCtx();
  return <ContainerStyled $show={openSidebar}></ContainerStyled>;
};

export default Sidebar;

//#region styled
const ContainerStyled = styled(DivStyled)<{ $show: boolean }>`
  height: 100%;
  flex: 0 0 ${({ $show }) => ($show ? "250px" : "50px")};
  transition: flex 0.2s ease-in-out;

  background-color: ${(props) => props.theme.sidebarBgColor};

  border-right: ${(props) => props.theme.border};
`;
//#endregion
