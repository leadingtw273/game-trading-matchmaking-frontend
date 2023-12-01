import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

export default function Router() {
  const fallbackElement = <p>Loading...</p>;
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
          path: "create",
          lazy: () => import("@/views/Create"),
        },
        {
          path: "search",
          lazy: () => import("@/views/Search"),
        },
        {
          path: "dealer",
          lazy: () => import("@/views/Dealer"),
        },
        {
          path: "contact",
          lazy: () => import("@/views/Contact"),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} fallbackElement={fallbackElement} />;
}
