import React from "react";
import { AppBar, useMediaQuery, useTheme } from "@mui/material";
import { StyledNBDiv, StyledNBToolBar, StyledNB } from "./SytleFile";
import Tablefile from "./Tablefile";

function Landingpage() {
  const theme = useTheme();
  const isSmMd = useMediaQuery(theme.breakpoints.down(1200));

  return (
    <div>
      <AppBar position="sticky">
        <StyledNBToolBar
          style={{
            padding: isSmMd ? ".5rem 4%" : ".5rem 9%",
            minHeight: "auto",
            backgroundColor: "black"
          }}
        >
          <div style={{ fontFamily: "sans-serif", fontSize: "30px" }}>
            KaayLabs
          </div>
          <StyledNBDiv
            style={{
              padding: "20px 20px"
            }}
          >
            <StyledNB
              onMouseEnter={(e) => (e.target.style.color = "#0FA4DA")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Home
            </StyledNB>
            <StyledNB
              onMouseEnter={(e) => (e.target.style.color = "#0FA4DA")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Company
            </StyledNB>
            <StyledNB
              onMouseEnter={(e) => (e.target.style.color = "#0FA4DA")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Services
            </StyledNB>
            <StyledNB
              onMouseEnter={(e) => (e.target.style.color = "#0FA4DA")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Projects
            </StyledNB>
            <StyledNB
              onMouseEnter={(e) => (e.target.style.color = "#0FA4DA")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Contact Us
            </StyledNB>
          </StyledNBDiv>
        </StyledNBToolBar>
      </AppBar>
      <div style={{ padding: "2rem 9%" }}>
        <Tablefile />
      </div>
    </div>
  );
}

export default Landingpage;
