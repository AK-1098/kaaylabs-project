import { styled, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledNBToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  padding: ".3rem 0"
}));
export const StyledNB = styled(NavLink)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  marginRight: "2rem",
  fontWeight: "600",
  fontSize: "16px"
}));

export const StyledNBDiv = styled("div")(({ theme }) => ({
  outline: "none",
  display: "block",
  padding: "10px 15px",
  [theme.breakpoints.down(700)]: {
    display: "none"
  }
}));
