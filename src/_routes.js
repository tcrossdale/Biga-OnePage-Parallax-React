import React from "react";

const FrontPage = React.lazy(() => import("./pages/front-page"));
const Single = React.lazy(() => import("./pages/single"));
const Page = React.lazy(() => import("./pages/page"));

const appRoutes = [
  { path: "/", exact: true, name: "Home", component: FrontPage },
  { path: "/single", name: "Single Post Template", component: Single },
  { path: "/page", name: "Page Template", component: Page }
];

export default appRoutes;
