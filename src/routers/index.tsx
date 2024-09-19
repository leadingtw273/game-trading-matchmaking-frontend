import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      lazy: () => import("@/layouts"),
      children: [
        {
          index: true,
          lazy: () => import("@/views/Home"),
        },
        {
          path: "market",
          children: [
            {
              path: "",
              element: <Navigate to="/market/coin" replace />,
            },
            {
              path: "coin",
              lazy: () => import("@/views/Market/Coin"),
            },
            {
              path: "appearance",
              lazy: () => import("@/views/Market/Appearance"),
            },
            {
              path: "character",
              lazy: () => import("@/views/Market/Character"),
            },
          ],
        },
        {
          path: "character/:id",
          lazy: () => import("@/views/Character"),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
