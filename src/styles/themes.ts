export const lightTheme = {
  background: "#F2F2F2", // whiteSmoke
  elementBackground: "#e3e3e3", // white (for elements like cards)
  text: "#363635", // jet
  primary: "#595A4A", // ebony (could be used for main elements)
  secondary: "#A5A5A5", // silver (could be used for secondary text/borders)
  accent: "#CCCCCC", // lightSilver (subtle accents or dividers)
};

export const darkTheme = {
  background: "#363635", // jet (dark background)
  elementBackground: "#4a4a49", // ebony (dark elements)
  text: "#F2F2F2", // whiteSmoke (light text)
  primary: "#A5A5A5", // silver (can be a good primary color in dark mode)
  secondary: "#CCCCCC", // lightSilver (lighter secondary text)
  accent: "#595A4A", // ebony (darker accent or element color)
};

export type Theme = typeof lightTheme;
