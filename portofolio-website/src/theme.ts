"use client";
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2563eb",
      light: "#f1f5f9",
    },
    secondary: {
      main: "#64748b",
    },
    grey: {
      100: "#94a3b8",
    },
    background: {
      default: "#ffffff",
      paper: "#f8fafc",
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
    divider: "#e2e8f0",
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1d4ed8",
      light: "rgba(255, 255, 255, 0.05)",
    },
    secondary: {
      main: "#94a3b8",
    },
    background: {
      default: "#000000",
      paper: "#0f172a",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#94a3b8",
    },
    grey: {
      100: "#64748b",
    },
    divider: "#334155",
  },
  typography: {
    button: {
      textTransform: "capitalize",
    },
  },
});
