import React, { createContext, useContext, useState } from "react";

const WorkspaceContext = createContext<{
  openSidebar: boolean;
  toggleSidebar: () => void;
}>({
  openSidebar: true,
  toggleSidebar: () => {},
});

export const useWorkspaceCtx = () => useContext(WorkspaceContext);

const WorkspaceProvider = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const toggleSidebar = () => setOpenSidebar((prev) => !prev);

  return (
    <WorkspaceContext.Provider value={{ openSidebar, toggleSidebar }}>
      {children}
    </WorkspaceContext.Provider>
  );
};

export default WorkspaceProvider;
