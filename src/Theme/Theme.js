import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Switch from "@mui/material/Switch"; // Make sure you import the Switch component

export default function App() {
  // Initialize the toggleDarkMode state, defaulting to light mode
  const [toggleDarkMode, setToggleDarkMode] = useState(false); // Default to light mode

  // Toggle the theme mode between dark and light
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // Dynamically create the theme based on the toggleDarkMode state
  const theme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light", // Toggle between dark and light mode
      primary: {
        main: "#90caf9", // Light blue
      },
      secondary: {
        main: '#f48fb1', // Light pink
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply CSS baseline to ensure consistent styling */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',  // Full screen height
          backgroundColor: theme.palette.background.default,  // Dynamic background color based on theme
        }}
      >
        {/* Switch to toggle dark and light mode */}
        <Switch
          checked={toggleDarkMode} // Use the toggleDarkMode state here
          onChange={toggleDarkTheme} // Use the toggleDarkTheme function
        />
        <span style={{ marginTop: '20px', fontSize: '18px' }}>
          {toggleDarkMode ? 'Dark Mode' : 'Light Mode'} {/* Display the current mode */}
        </span>
      </div>
    </ThemeProvider>
  );
}
