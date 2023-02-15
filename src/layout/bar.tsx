import Container from "@mui/material/Container";
import { lazy } from "react";
import { useAuth } from "../auth/context/context";

 const ActionsContainer = lazy(() => import("../containers/ActionsContainer"));

export const Bar = () => {
  const authService = useAuth();

  return (
    <Container fixed maxWidth="sm">
      <ActionsContainer authService={authService} />
    </Container>
  );
};

export default Bar;