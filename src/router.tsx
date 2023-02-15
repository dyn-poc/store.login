import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "./components/Loading";
import ServicesProvider from "./ioc/context";
import Layout from "./layout";
import { Dashbaord } from "./pages/dashboard";
import routes from '~react-pages'

const router = createBrowserRouter([
    {
      path: '/',
      element:    <Layout />,
      children: routes,
    }
  
  ]);
 console.log(router)

  export default router;
  