import { lazy } from "react";


export const HomePageAsync = lazy(() => new Promise((resolve) => {
  // @ts-expect-error: resolve expects a specific module shape, but setTimeout's callback returns void
  setTimeout(() => resolve(import("./HomePage")), 1500);
}));