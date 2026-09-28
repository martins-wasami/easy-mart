import { Suspense } from "react";
import { Routes, Route } from "react-router";

import { PageLoader } from "@/widgets/PageLoader";

import { routeConfig } from "../routerConfig";


export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({path, element}) => (
       <Route key={path} path={path} element={<Suspense  fallback={<PageLoader fullscreen/>}>{element}</Suspense>} />
      ))}
    </Routes>
  );
}
