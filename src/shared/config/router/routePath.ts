export const AppRoutes = {
  HOME: "home",
  LOGIN: "login",
  Not_Found: 'not-found'
  } as const;   
  
  export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes];

  export const routePaths: Record<AppRoutesType, string> = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.LOGIN]: "/login",

    // last
    [AppRoutes.Not_Found]: '*'
  };