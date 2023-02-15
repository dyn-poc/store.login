import Container from "@mui/material/Container";
import NotificationsContainer from "../containers/NotificationsContainer";
import { useServices } from "../ioc/context";

// const NotificationsContainer = lazy(() => import("../containers/NotificationsContainer"));

export const Side = () => {
  const { notificationsService } = useServices();

  return (
    <Container fixed maxWidth="sm">
      <NotificationsContainer notificationsService={notificationsService} />
    </Container>
  );
};

export default Side;
