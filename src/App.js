//Normal imports
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
//Lazy loading/ Dynamic bundeling
const Profile = lazy(() => import("./components/Profile"));
const Culture = lazy(() => import("./components/Culture"));
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Profile",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Profile />
          </Suspense>
        ),
        children: [
          {
            path: "Dashboard",
            element: <Login />,
          },
        ],
      },
      {
        path: "/Culture",
        element: (
          <Suspense fallback={<h1>LOADING... ^-^</h1>}>
            <Culture />
          </Suspense>
        ),
      },
      {
        path: "/Project/:id",
        element: <ProjectDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
