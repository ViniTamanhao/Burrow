import { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const SidebarContainer = styled.div<{ isCollapsed: boolean }>`
  width: ${(props) => (props.isCollapsed ? "40px" : "200px")};
  background-color: ${(props) => props.theme.elementBackground};
  height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: width 0.3s ease;
`;

const ToggleButton = styled.button<{ isCollapsed: boolean }>`
  background-color: ${(props) =>
    props.isCollapsed ? "transparent" : props.theme.background};
  color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  position: absolute;
  bottom: 5px;
`;

function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    console.log(theme);
    setIsCollapsed((prev) => !prev);
  };

  return (
    <SidebarContainer isCollapsed={isCollapsed}>
      <ToggleButton onClick={handleToggleSidebar} isCollapsed={isCollapsed}>
        <DensityMediumIcon />
      </ToggleButton>
      <ThemeButton onClick={toggleTheme}>
        {theme.background === "#F2F2F2" ? <LightModeIcon /> : <DarkModeIcon />}
      </ThemeButton>
    </SidebarContainer>
  );
}

export default Sidebar;
