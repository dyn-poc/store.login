// import logo from "./logo.svg";
import React from "react";
import "./index.css";
import "../styles/globals.css";
import { responsiveFontSizes, StyledEngineProvider, ThemeProvider} from "@mui/material";
import { theme } from "../theme/AppTheme";
import { useRoutes } from "react-router";
import { Dashbaord } from "./dashboard";

 
// export function AppRoutes(props:any) {
//     let element = useRoutes([
//       {
//         path: "/",
//         element: <Dashbaord {...props} />
//       }

//     ]);

//     return element;
//   }
const App = () => {

     return (
                      <Dashbaord />
    );
};




export default App;
