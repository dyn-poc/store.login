import React, { lazy, Suspense } from "react";
import AuthStateRoute from "../../containers/AuthStateRouter";

// const Layout = lazy(() => import('./Layout'));
// const AuthStateRoute = lazy(() => import('./AuthStateRouter'));



export function Dashbaord(props: any) {
  return (
        <AuthStateRoute {...props} />
  );
}
