//Normal imports
import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
import { Provider } from "react-redux";
import store from "./utils/store.js";
//Context
import UserContext from "./utils/UserContext";
//Lazy loading/ Dynamic bundeling
const Profile = lazy(() => import("./components/Profile"));
const Culture = lazy(() => import("./components/Culture"));

const AppLayout = () => {
  const [user, setUser] = useState(useContext(UserContext).user);
  return (
    <div className="app">
      <Provider store={store}>
        <UserContext.Provider value={{ user, setUser }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
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
      },
      {
        path: "/Login",
        element: <Login />,
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
