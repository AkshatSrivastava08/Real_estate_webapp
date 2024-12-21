import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import { Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import Explore from "./routes/explorePage/Explore";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "https://thehomescout.netlify.app/",
      element: <Layout />,
      children: [
        {
          path: "https://thehomescout.netlify.app/",
          element: <HomePage />,
        },
        {
          path: 'https://thehomescout.netlify.app/explore',
          element: <Explore />
        },
        {
          path: "https://thehomescout.netlify.app/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "https://thehomescout.netlify.app/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "https://thehomescout.netlify.app/login",
          element: <Login />,
        },
        {
          path: "https://thehomescout.netlify.app/register",
          element: <Register />,
        },
      ],
    },
    {
      path: "https://thehomescout.netlify.app/",
      element: <RequireAuth />,
      children: [
        {
          path: "https://thehomescout.netlify.app/profile",
          element: <ProfilePage />,
          loader: profilePageLoader
        },
        {
          path: "https://thehomescout.netlify.app/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "https://thehomescout.netlify.app/add",
          element: <NewPostPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
