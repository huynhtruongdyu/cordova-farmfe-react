import { createHashRouter } from "react-router-dom";
import { DefaultLayout } from "./components/layouts";
import { ErrorPage, HomePage, NotesPage } from "./pages";

const router = createHashRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "notes",
        element: <NotesPage />,
      },
    ],
  },
]);

export default router;
