import { createTheme } from "@mui/material/styles";
import { selectDownIcon } from "../assets/images";

let customTheme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  palette: {
    primary: {
      main: "#007CC3",
    },
  },
});
customTheme = createTheme(customTheme, {
  typography: {
    h1: {
      fontSize: "66px",
      lineHeight: "80px",
      fontWeight: 600,
      color: "#333333",
      ".orange-text": { color: "#EF7C18" },
      [customTheme.breakpoints.down("xl")]: {
        fontSize: "48px",
        lineHeight: "56px",
      },
      [customTheme.breakpoints.down("md")]: {
        fontSize: "36px",
        lineHeight: "42px",
      },
    },
    h2: {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: 600,
      color: "#333333",
      ".orange-text": { color: "#EF7C18", display: "inline-block" },
      [customTheme.breakpoints.down("xl")]: {
        fontSize: "36px",
        lineHeight: "40px",
      },
      [customTheme.breakpoints.down("md")]: {
        fontSize: "32px",
        lineHeight: "36px",
      },
      [customTheme.breakpoints.down("sm")]: {
        fontSize: "28px",
        lineHeight: "34px",
      },
    },
    h3: {
      fontSize: "32px",
      lineHeight: "38px",
      fontWeight: 600,
      color: "#FFFFFF",
    },
    h4: {
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: 500,
      "&.primary-heading": {
        color: "#007CC3",
      },
      ".orange-text": { color: "#EF7C18", display: "inline-block" },
    },
    h5: {
      fontSize: "20px",
      lineHeight: "26px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 600,
      color: "#333333",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "14px",
      lineHeight: "18px",
      fontWeight: 600,
      color: "#333333",
    },
  },
  components: {
    MuiAvatar: {
      defaultProps: {
        variant: "square",
      },
      styleOverrides: {
        root: {
          height: "auto",
          width: "auto",
          "&.outlined-img": {
            border: "4px solid #FFFFFF",
            boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.12)",
            borderRadius: "16px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
        contained: {
          whiteSpace: "nowrap",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        containedPrimary: {
          fontSize: "18px",
          lineHeight: "20px",
          color: "#ffffff",
          "&:hover": {
            color: "#ffffff",
          },
        },
        containedSizeMedium: {
          padding: "12px 16px",
          height: "48px",
          minWidth: "90px",
          borderRadius: "10px",
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          ".MuiBreadcrumbs-ol": {
            justifyContent: "center",
          },
          ".MuiBreadcrumbs-separator": {
            margin: "0 4px",
          },
          ".MuiBreadcrumbs-li": {
            a: {
              fontSize: "24px",
              lineHeight: "30px",
              color: "#ffffff",
              position: "relative",
              [customTheme.breakpoints.down("xl")]: {
                fontSize: "20px",
                lineHeight: "24px",
              },
              "&::before": {
                content: "''",
                position: "absolute",
                bottom: "-1px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                transition: "all 0.3s",
                height: "1px",
                backgroundColor: "currentColor",
              },
              "&:hover,&:focus": {
                "&::before": {
                  width: "100%",
                },
              },
            },
            ".MuiTypography-body1": {
              fontSize: "24px",
              lineHeight: "30px",
              color: "#ffffff",
              fontWeight: 600,
              [customTheme.breakpoints.down("xl")]: {
                fontSize: "20px",
                lineHeight: "24px",
              },
            },
          },
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        color: "primary",
        variant: "outlined",
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          ":hover": {
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#007CC3",
            },
          },
        },
        notchedOutline: {
          borderColor: "rgba(82, 82, 82, 0.2)",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          ".MuiSelect-icon": {
            background: `url(${selectDownIcon})`,
            backgroundSize: "24px",
            path: { display: "none" },
            right: "12px",
            height: "24px",
            width: "24px",
            top: "50%",
            transform: "translateY(-50%)",
          },
        },
        input: {
          color: "#333333",
          height: "20px",
          "&.MuiOutlinedInput-input:not(textarea)": {
            padding: "14px 12px",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#888888",
          lineHeight: "20px",
          transform: "translate(16px, 14px) scale(1)",
          "&.MuiInputLabel-shrink": {
            transform: "translate(16px, -7px) scale(0.75)",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
export default customTheme;
