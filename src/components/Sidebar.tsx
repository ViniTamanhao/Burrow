import { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../context/themeProvider";

import { useNavigate } from "react-router-dom";

import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";

const SidebarContainer = styled.div<{ isCollapsed: boolean }>`
  width: ${(props) => (props.isCollapsed ? "40px" : "120px")};
  background-color: ${(props) => props.theme.elementBackground};
  height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: width 0.3s ease;
`;

const ToggleButton = styled.button<{ isCollapsed: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    props.isCollapsed ? props.theme.background : "transparent"};
  color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
    transition: 0.3s ease;
  }
`;

const PageButton = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100% - 16px);
  background-color: ${(props) =>
    props.isCollapsed ? props.theme.background : "transparent"};
  color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
    transition: 0.3s ease;
  }

  span {
    display: ${(props) => (props.isCollapsed ? "none" : "inline")};
    font-size: 16px;
    margin-left: 10px;
    transition: 1s ease;
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

interface PageButtonProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isCollapsed: boolean;
}

const SidebarButton: React.FC<PageButtonProps> = ({
  to,
  icon,
  label,
  isCollapsed,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <PageButton isCollapsed={isCollapsed} onClick={handleClick}>
      {icon}
      <span>{label}</span>
    </PageButton>
  );
};

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
      <SidebarButton
        to="/"
        icon={<HomeIcon />}
        label="Home"
        isCollapsed={isCollapsed}
      />
      <SidebarButton
        to="/library"
        icon={<BookIcon />}
        label="Library"
        isCollapsed={isCollapsed}
      />
      <ThemeButton onClick={toggleTheme}>
        {theme.background === "#F2F2F2" ? <LightModeIcon /> : <DarkModeIcon />}
      </ThemeButton>
    </SidebarContainer>
  );
}

export default Sidebar;
