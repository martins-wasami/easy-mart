import { Routes, Route } from "react-router";
import { routeConfig } from "../routerConfig";
import { Suspense } from "react";


export const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({path, element}) => (
       <Route key={path} path={path} element={<Suspense  fallback={<>loading</>}>{element}</Suspense>} />
      ))}
    </Routes>
  );
}
