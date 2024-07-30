import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { Footer, Header, Sidebar } from "..";
import { WorkspaceProvider } from "../../features/app/providers";
import { AppearanceProvider } from "../../features/theming/providers";
import { DivStyled } from "../styled/styled-component";

const DefaultLayout = () => {
  console.log("DefaultLayout");
  return (
    <WorkspaceProvider>
      <AppearanceProvider>
        <ContainerStyled>
          <Sidebar />
          <MainContainerStyled>
            <Header />
            <OutletContainerStyled>
              <Outlet />
            </OutletContainerStyled>
            <Footer />
          </MainContainerStyled>
        </ContainerStyled>
      </AppearanceProvider>
    </WorkspaceProvider>
  );
};

export default DefaultLayout;

//#region styled
const ContainerStyled = styled(DivStyled)`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: flex;
`;

const MainContainerStyled = styled(DivStyled)`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.editorBgColor};
`;

const OutletContainerStyled = styled(DivStyled)`
  flex: 1;
`;
//#endregion
