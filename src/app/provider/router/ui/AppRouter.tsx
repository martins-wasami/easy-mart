import { Routes, Route } from "react-router";
import { routeConfig } from "../routerConfig";
import { Suspense } from "react";
import { PageLoader } from "@/widgets/PageLoader";


export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({path, element}) => (
       <Route key={path} path={path} element={<Suspense  fallback={<PageLoader fullscreen/>}>{element}</Suspense>} />
      ))}
    </Routes>
  );
}
