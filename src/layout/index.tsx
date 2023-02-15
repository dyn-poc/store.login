import { Outlet } from "@mui/icons-material";
import {
  Box,
  Container,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import React, { lazy } from "react";
import ServicesProvider from "../ioc/context";
import { theme } from "../theme/AppTheme";
import Bar from "./bar";
import Side from "./side";
// const ActionsContainer = lazy(() => import("../containers/ActionsContainer"));
// const ServicesProvider = lazy(() => import("../ioc/context"));

export function Layout({ children }: React.PropsWithChildren) {
  const responsiveTheme = responsiveFontSizes(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={responsiveTheme}>
        <ServicesProvider>
          <div>
            <Bar />
            <Box
              sx={{
                display: "flex",
                flexWrap: "none",
                m: 20,

                alignItems: "left",
              }}
            >
              <Container fixed>{children}
              <Outlet />
              
              </Container>

              <Side />
            </Box>
          </div>
        </ServicesProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default Layout;
